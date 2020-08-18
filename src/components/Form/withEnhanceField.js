import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Badge from '../Badge';
import { X, Check } from '../Icon';
import { pick } from '../../utils/helpers';

const renderPropsBadge = ({
  error,
  success,
}) => {
  let icon = null;
  let color = '';

  if (error) {
    icon = <X />;
    color = '#ce1a23'
  } else if (success) {
    icon = <Check />;
    color = '#49aa18';
  }

  return {
    invisible: !(error || success),
    icon: icon,
    color: color,
  };
};

export default () => FieldComponent => {
  const FieldEnhance = React.forwardRef(({ label, error, success, hiddenLabel, ...otherProps }, ref) => {
    const {
      name,
      required,
    } = useMemo(() => pick(otherProps, [
      'name',
      'required'
    ]), [otherProps]);

    const message = useMemo(() => {
      if (error) {
        return {
          status: 'error',
          text: error,
          className: 'fui-form-field-message--error',
        };
      }

      return '';
    }, [error]);

    const badgeProps = useMemo(() => renderPropsBadge({ error, success }), [error, success]);
  
    return (
      <div className={cn('fui-form-field')}>
        {label && (
          <label
            className={cn(
              'fui-form-field-label',
              {
                'fui-form-field-label--required': required,
                'fui-form-field-label--hidden-label': hiddenLabel,
              })
            }
            htmlFor={name}
            required={required}
          >
            {label}
          </label>
        )}
        <Badge {...badgeProps}>
          <FieldComponent
            ref={ref}
            {...otherProps}
          />
        </Badge>
        {message && (
          <div className={cn('fui-form-field-message', message.className)}>
            {message.text}
          </div>
        )}
      </div>
    );
  });

  FieldEnhance.displayName = `withEnhanceField(${FieldComponent.displayName || FieldComponent.name || 'Component'})`;
  FieldEnhance.propTypes = {
    error: PropTypes.string,
    success: PropTypes.oneOf([PropTypes.bool, PropTypes.string]),
    warning: PropTypes.string,
  };
  FieldEnhance.defaultProps = {
  };

  return FieldEnhance;
};
