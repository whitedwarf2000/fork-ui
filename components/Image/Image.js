import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback
} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Skeleton from '../Skeleton';
import NativeImage from './Native';
import { omit } from '../../utils/helpers';
import useSemanticProp from '../../hooks/useSemanticProp';

const mObjectFit = Object.freeze({
  cover: 'fimg-native-cover',
  contain: 'fimg-native-contain',
  fill: 'fimg-native-fill',
  none: 'fimg-native-none',
  blur: 'fimg-native-blur',
  scaleDown: 'fimg-native-scale-down',
});

const lObjectFit = Object.keys(mObjectFit);

const Image = ({ className, lazyload, w, h, src, clientElement, ...otherProps }) => {
  const ref = useRef();
  const [natural, setNatural] = useState({ naturalWidth: 0, naturalHeight: 0 }); // real size of image
  const [injectSrc, setInjectSrc] = useState(lazyload ? {} : { src });

  const isLoaded = useMemo(() => !!injectSrc.src, [injectSrc.src]);

  const isInViewPort = useCallback(() => {
    const { top, left } = ref.current.getBoundingClientRect();

    return (
      top >= 0 &&
      top < (window.innerHeight || clientElement.clientHeight) &&
      left >= 0
    );
  }, [ref, clientElement]);

  const displayImage = useCallback(() => {
    if (!injectSrc.src && isInViewPort()) {
      setInjectSrc({ src });
    }
  }, [injectSrc, isInViewPort, setInjectSrc, src]);

  // Init
  useEffect(() => {
    displayImage();
  } , []);

  useEffect(() => {
    if (isLoaded) {
      setNatural({
        naturalWidth: ref.current.naturalWidth,
        naturalHeight: ref.current.naturalHeight,
      });
    }
  }, [isLoaded, setNatural, ref]);

  // Tracking scroll
  useEffect(() => {
    if (lazyload) {
      const handleScroll = () => displayImage();
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [displayImage]);

  const objectFit = useSemanticProp('objectFit', otherProps, [
    'cover',
    'contain',
    'fill',
    'none',
    'scaleDown',
    'blur',
  ]);

  const passedProps = useMemo(() => omit(otherProps, [
    'width',
    'height',
    'objectFit',
    ...lObjectFit,
  ]), [otherProps]);

  return (
    <div
      className={cn('fimg', className)}
      style={{
        width: w,
        height: h,
      }}
    >
      {objectFit === 'blur' && (
        <div
          className="fimg-blur"
          style={{
            backgroundImage: isLoaded ? `url(${src})` : null,
          }}
        />
      )}
      {!isLoaded && (
        <Skeleton className="fimg-skeleton" />
      )}
      <NativeImage
        data-src={src}
        className={cn(
          'fimg-native fimg-native-main',
          {
            'fimg-native-loaded': isLoaded,
          },
          mObjectFit[objectFit] || 'fimg-native-cover',
        )}
        ref={ref}
        onCompleted={f => f}
        {...injectSrc}
        {...passedProps}
      />
    </div>
  );
};

Image.Native = NativeImage;
Image.displayName = 'Image';
Image.propTypes = {
  className: PropTypes.string,
  lazyload: PropTypes.bool,
  w: PropTypes.string,
  h: PropTypes.string,
  src: PropTypes.string,
  objectFit: PropTypes.string,
  cover: PropTypes.bool,
  contain: PropTypes.bool,
  none: PropTypes.bool,
  scaleDown: PropTypes.bool,
  none: PropTypes.bool,
  blur: PropTypes.bool,
  clientElement: PropTypes.any,
};
Image.defaultProps = {
  clientElement : document.documentElement,
};

export default Image;
