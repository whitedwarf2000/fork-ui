// THANK TO https://github.com/tabler/tabler-icons
import React from 'react';
import enhancerIcon from './enhancerIcon';
const all = {};

export const TwoFa = enhancerIcon('2fa', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
  <path d="M10 16v-8h4" />
  <line x1="10" y1="12" x2="13" y2="12" />
  <path d="M17 16v-6a2 2 0 0 1 4 0v6" />
  <line x1="17" y1="13" x2="21" y2="13" />
</svg>
));
TwoFa.displayName = 'TwoFa';
all['2fa'] = TwoFa;

export const ThreeDCubeSphere = enhancerIcon('3d-cube-sphere', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 17.6l-2 -1.1v-2.5" />
  <path d="M4 10v-2.5l2 -1.1" />
  <path d="M10 4.1l2 -1.1l2 1.1" />
  <path d="M18 6.4l2 1.1v2.5" />
  <path d="M20 14v2.5l-2 1.12" />
  <path d="M14 19.9l-2 1.1l-2 -1.1" />
  <line x1="12" y1="12" x2="14" y2="10.9" />
  <line x1="18" y1="8.6" x2="20" y2="7.5" />
  <line x1="12" y1="12" x2="12" y2="14.5" />
  <line x1="12" y1="18.5" x2="12" y2="21" />
  <path d="M12 12l-2 -1.12" />
  <line x1="6" y1="8.6" x2="4" y2="7.5" />
</svg>
));
ThreeDCubeSphere.displayName = 'ThreeDCubeSphere';
all['3d-cube-sphere'] = ThreeDCubeSphere;

export const AB = enhancerIcon('a-b', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
  <line x1="12" y1="6" x2="12" y2="18" />
  <path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" />
</svg>
));
AB.displayName = 'AB';
all['a-b'] = AB;

export const AccessPointOff = enhancerIcon('access-point-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" />
  <path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" />
  <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
  <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
</svg>
));
AccessPointOff.displayName = 'AccessPointOff';
all['access-point-off'] = AccessPointOff;

export const AccessPoint = enhancerIcon('access-point', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <path d="M14.828 9.172a4 4 0 0 1 0 5.656" />
  <path d="M17.657 6.343a8 8 0 0 1 0 11.314" />
  <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
  <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
</svg>
));
AccessPoint.displayName = 'AccessPoint';
all['access-point'] = AccessPoint;

export const Accessible = enhancerIcon('accessible', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
  <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
</svg>
));
Accessible.displayName = 'Accessible';
all['accessible'] = Accessible;

export const Activity = enhancerIcon('activity', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12h4l3 8l4 -16l3 8h4" />
</svg>
));
Activity.displayName = 'Activity';
all['activity'] = Activity;

export const Ad = enhancerIcon('ad', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="M7 15v-4a2 2 0 0 1 4 0v4" />
  <line x1="7" y1="13" x2="11" y2="13" />
  <path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" />
</svg>
));
Ad.displayName = 'Ad';
all['ad'] = Ad;

export const AdjustmentsAlt = enhancerIcon('adjustments-alt', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="8" width="4" height="4" />
  <line x1="6" y1="4" x2="6" y2="8" />
  <line x1="6" y1="12" x2="6" y2="20" />
  <rect x="10" y="14" width="4" height="4" />
  <line x1="12" y1="4" x2="12" y2="14" />
  <line x1="12" y1="18" x2="12" y2="20" />
  <rect x="16" y="5" width="4" height="4" />
  <line x1="18" y1="4" x2="18" y2="5" />
  <line x1="18" y1="9" x2="18" y2="20" />
</svg>
));
AdjustmentsAlt.displayName = 'AdjustmentsAlt';
all['adjustments-alt'] = AdjustmentsAlt;

export const AdjustmentsHorizontal = enhancerIcon('adjustments-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="14" cy="6" r="2" />
  <line x1="4" y1="6" x2="12" y2="6" />
  <line x1="16" y1="6" x2="20" y2="6" />
  <circle cx="8" cy="12" r="2" />
  <line x1="4" y1="12" x2="6" y2="12" />
  <line x1="10" y1="12" x2="20" y2="12" />
  <circle cx="17" cy="18" r="2" />
  <line x1="4" y1="18" x2="15" y2="18" />
  <line x1="19" y1="18" x2="20" y2="18" />
</svg>
));
AdjustmentsHorizontal.displayName = 'AdjustmentsHorizontal';
all['adjustments-horizontal'] = AdjustmentsHorizontal;

export const Adjustments = enhancerIcon('adjustments', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="10" r="2" />
  <line x1="6" y1="4" x2="6" y2="8" />
  <line x1="6" y1="12" x2="6" y2="20" />
  <circle cx="12" cy="16" r="2" />
  <line x1="12" y1="4" x2="12" y2="14" />
  <line x1="12" y1="18" x2="12" y2="20" />
  <circle cx="18" cy="7" r="2" />
  <line x1="18" y1="4" x2="18" y2="5" />
  <line x1="18" y1="9" x2="18" y2="20" />
</svg>
));
Adjustments.displayName = 'Adjustments';
all['adjustments'] = Adjustments;

export const Alarm = enhancerIcon('alarm', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="13" r="7" />
  <polyline points="12 10 12 13 14 13" />
  <line x1="7" y1="4" x2="4.25" y2="6" />
  <line x1="17" y1="4" x2="19.75" y2="6" />
</svg>
));
Alarm.displayName = 'Alarm';
all['alarm'] = Alarm;

export const AlertCircle = enhancerIcon('alert-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="8" x2="12" y2="12" />
  <line x1="12" y1="16" x2="12.01" y2="16" />
</svg>
));
AlertCircle.displayName = 'AlertCircle';
all['alert-circle'] = AlertCircle;

export const AlertOctagon = enhancerIcon('alert-octagon', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8.7 3h6.6c.3 0 .5 .1 .7 .3l4.7 4.7c.2 .2 .3 .4 .3 .7v6.6c0 .3 -.1 .5 -.3 .7l-4.7 4.7c-.2 .2 -.4 .3 -.7 .3h-6.6c-.3 0 -.5 -.1 -.7 -.3l-4.7 -4.7c-.2 -.2 -.3 -.4 -.3 -.7v-6.6c0 -.3 .1 -.5 .3 -.7l4.7 -4.7c.2 -.2 .4 -.3 .7 -.3z" />
  <line x1="12" y1="8" x2="12" y2="12" />
  <line x1="12" y1="16" x2="12.01" y2="16" />
</svg>
));
AlertOctagon.displayName = 'AlertOctagon';
all['alert-octagon'] = AlertOctagon;

export const AlertTriangle = enhancerIcon('alert-triangle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 9v2m0 4v.01" />
  <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
</svg>
));
AlertTriangle.displayName = 'AlertTriangle';
all['alert-triangle'] = AlertTriangle;

export const Alien = enhancerIcon('alien', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 17a2.5 2.5 0 0 0 2 0" />
  <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
  <line x1="8" y1="11" x2="10" y2="13" />
  <line x1="16" y1="11" x2="14" y2="13" />
</svg>
));
Alien.displayName = 'Alien';
all['alien'] = Alien;

export const AlignCenter = enhancerIcon('align-center', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="8" y1="12" x2="16" y2="12" />
  <line x1="6" y1="18" x2="18" y2="18" />
</svg>
));
AlignCenter.displayName = 'AlignCenter';
all['align-center'] = AlignCenter;

export const AlignJustified = enhancerIcon('align-justified', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="16" y2="18" />
</svg>
));
AlignJustified.displayName = 'AlignJustified';
all['align-justified'] = AlignJustified;

export const AlignLeft = enhancerIcon('align-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="14" y2="12" />
  <line x1="4" y1="18" x2="18" y2="18" />
</svg>
));
AlignLeft.displayName = 'AlignLeft';
all['align-left'] = AlignLeft;

export const AlignRight = enhancerIcon('align-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="10" y1="12" x2="20" y2="12" />
  <line x1="6" y1="18" x2="20" y2="18" />
</svg>
));
AlignRight.displayName = 'AlignRight';
all['align-right'] = AlignRight;

export const Ambulance = enhancerIcon('ambulance', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="17" r="2" />
  <circle cx="17" cy="17" r="2" />
  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
  <path d="M6 10h4m-2 -2v4" />
</svg>
));
Ambulance.displayName = 'Ambulance';
all['ambulance'] = Ambulance;

export const Anchor = enhancerIcon('anchor', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" />
  <circle cx="12" cy="6" r="3" />
</svg>
));
Anchor.displayName = 'Anchor';
all['anchor'] = Anchor;

export const AntennaBars1 = enhancerIcon('antenna-bars-1', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="18" x2="6" y2="18.01" />
  <line x1="10" y1="18" x2="10" y2="18.01" />
  <line x1="14" y1="18" x2="14" y2="18.01" />
  <line x1="18" y1="18" x2="18" y2="18.01" />
</svg>
));
AntennaBars1.displayName = 'AntennaBars1';
all['antenna-bars-1'] = AntennaBars1;

export const AntennaBars2 = enhancerIcon('antenna-bars-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="18" x2="6" y2="15" />
  <line x1="10" y1="18" x2="10" y2="18.01" />
  <line x1="14" y1="18" x2="14" y2="18.01" />
  <line x1="18" y1="18" x2="18" y2="18.01" />
</svg>
));
AntennaBars2.displayName = 'AntennaBars2';
all['antenna-bars-2'] = AntennaBars2;

export const AntennaBars3 = enhancerIcon('antenna-bars-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="18" x2="6" y2="15" />
  <line x1="10" y1="18" x2="10" y2="12" />
  <line x1="14" y1="18" x2="14" y2="18.01" />
  <line x1="18" y1="18" x2="18" y2="18.01" />
</svg>
));
AntennaBars3.displayName = 'AntennaBars3';
all['antenna-bars-3'] = AntennaBars3;

export const AntennaBars4 = enhancerIcon('antenna-bars-4', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="18" x2="6" y2="15" />
  <line x1="10" y1="18" x2="10" y2="12" />
  <line x1="14" y1="18" x2="14" y2="9" />
  <line x1="18" y1="18" x2="18" y2="18.01" />
</svg>
));
AntennaBars4.displayName = 'AntennaBars4';
all['antenna-bars-4'] = AntennaBars4;

export const AntennaBars5 = enhancerIcon('antenna-bars-5', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="18" x2="6" y2="15" />
  <line x1="10" y1="18" x2="10" y2="12" />
  <line x1="14" y1="18" x2="14" y2="9" />
  <line x1="18" y1="18" x2="18" y2="6" />
</svg>
));
AntennaBars5.displayName = 'AntennaBars5';
all['antenna-bars-5'] = AntennaBars5;

export const Aperture = enhancerIcon('aperture', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="3.6" y1="15" x2="14.15" y2="15" />
  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />
  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />
  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />
  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" />
</svg>
));
Aperture.displayName = 'Aperture';
all['aperture'] = Aperture;

export const Apps = enhancerIcon('apps', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="6" height="6" rx="1" />
  <rect x="4" y="14" width="6" height="6" rx="1" />
  <rect x="14" y="14" width="6" height="6" rx="1" />
  <line x1="14" y1="7" x2="20" y2="7" />
  <line x1="17" y1="4" x2="17" y2="10" />
</svg>
));
Apps.displayName = 'Apps';
all['apps'] = Apps;

export const Archive = enhancerIcon('archive', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="4" width="18" height="4" rx="2" />
  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
  <line x1="10" y1="12" x2="14" y2="12" />
</svg>
));
Archive.displayName = 'Archive';
all['archive'] = Archive;

export const ArrowBackUp = enhancerIcon('arrow-back-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
</svg>
));
ArrowBackUp.displayName = 'ArrowBackUp';
all['arrow-back-up'] = ArrowBackUp;

export const ArrowBack = enhancerIcon('arrow-back', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
</svg>
));
ArrowBack.displayName = 'ArrowBack';
all['arrow-back'] = ArrowBack;

export const ArrowBarDown = enhancerIcon('arrow-bar-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="20" x2="12" y2="10" />
  <line x1="12" y1="20" x2="16" y2="16" />
  <line x1="12" y1="20" x2="8" y2="16" />
  <line x1="4" y1="4" x2="20" y2="4" />
</svg>
));
ArrowBarDown.displayName = 'ArrowBarDown';
all['arrow-bar-down'] = ArrowBarDown;

export const ArrowBarLeft = enhancerIcon('arrow-bar-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="12" x2="14" y2="12" />
  <line x1="4" y1="12" x2="8" y2="16" />
  <line x1="4" y1="12" x2="8" y2="8" />
  <line x1="20" y1="4" x2="20" y2="20" />
</svg>
));
ArrowBarLeft.displayName = 'ArrowBarLeft';
all['arrow-bar-left'] = ArrowBarLeft;

export const ArrowBarRight = enhancerIcon('arrow-bar-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="20" y1="12" x2="10" y2="12" />
  <line x1="20" y1="12" x2="16" y2="16" />
  <line x1="20" y1="12" x2="16" y2="8" />
  <line x1="4" y1="4" x2="4" y2="20" />
</svg>
));
ArrowBarRight.displayName = 'ArrowBarRight';
all['arrow-bar-right'] = ArrowBarRight;

export const ArrowBarToDown = enhancerIcon('arrow-bar-to-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="20" y2="20" />
  <line x1="12" y1="14" x2="12" y2="4" />
  <line x1="12" y1="14" x2="16" y2="10" />
  <line x1="12" y1="14" x2="8" y2="10" />
</svg>
));
ArrowBarToDown.displayName = 'ArrowBarToDown';
all['arrow-bar-to-down'] = ArrowBarToDown;

export const ArrowBarToLeft = enhancerIcon('arrow-bar-to-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="10" y1="12" x2="20" y2="12" />
  <line x1="10" y1="12" x2="14" y2="16" />
  <line x1="10" y1="12" x2="14" y2="8" />
  <line x1="4" y1="4" x2="4" y2="20" />
</svg>
));
ArrowBarToLeft.displayName = 'ArrowBarToLeft';
all['arrow-bar-to-left'] = ArrowBarToLeft;

export const ArrowBarToRight = enhancerIcon('arrow-bar-to-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="14" y1="12" x2="4" y2="12" />
  <line x1="14" y1="12" x2="10" y2="16" />
  <line x1="14" y1="12" x2="10" y2="8" />
  <line x1="20" y1="4" x2="20" y2="20" />
</svg>
));
ArrowBarToRight.displayName = 'ArrowBarToRight';
all['arrow-bar-to-right'] = ArrowBarToRight;

export const ArrowBarToUp = enhancerIcon('arrow-bar-to-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="10" x2="12" y2="20" />
  <line x1="12" y1="10" x2="16" y2="14" />
  <line x1="12" y1="10" x2="8" y2="14" />
  <line x1="4" y1="4" x2="20" y2="4" />
</svg>
));
ArrowBarToUp.displayName = 'ArrowBarToUp';
all['arrow-bar-to-up'] = ArrowBarToUp;

export const ArrowBarUp = enhancerIcon('arrow-bar-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="4" x2="12" y2="14" />
  <line x1="12" y1="4" x2="16" y2="8" />
  <line x1="12" y1="4" x2="8" y2="8" />
  <line x1="4" y1="20" x2="20" y2="20" />
</svg>
));
ArrowBarUp.displayName = 'ArrowBarUp';
all['arrow-bar-up'] = ArrowBarUp;

export const ArrowBigDown = enhancerIcon('arrow-big-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
</svg>
));
ArrowBigDown.displayName = 'ArrowBigDown';
all['arrow-big-down'] = ArrowBigDown;

export const ArrowBigLeft = enhancerIcon('arrow-big-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
</svg>
));
ArrowBigLeft.displayName = 'ArrowBigLeft';
all['arrow-big-left'] = ArrowBigLeft;

export const ArrowBigRight = enhancerIcon('arrow-big-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
</svg>
));
ArrowBigRight.displayName = 'ArrowBigRight';
all['arrow-big-right'] = ArrowBigRight;

export const ArrowBigTop = enhancerIcon('arrow-big-top', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
</svg>
));
ArrowBigTop.displayName = 'ArrowBigTop';
all['arrow-big-top'] = ArrowBigTop;

export const ArrowBottomBar = enhancerIcon('arrow-bottom-bar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="3" x2="12" y2="21" />
  <path d="M9 18l3 3l3 -3" />
  <line x1="9" y1="3" x2="15" y2="3" />
</svg>
));
ArrowBottomBar.displayName = 'ArrowBottomBar';
all['arrow-bottom-bar'] = ArrowBottomBar;

export const ArrowBottomCircle = enhancerIcon('arrow-bottom-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="7" x2="12" y2="21" />
  <path d="M9 18l3 3l3 -3" />
  <circle cx="12" cy="5" r="2" />
</svg>
));
ArrowBottomCircle.displayName = 'ArrowBottomCircle';
all['arrow-bottom-circle'] = ArrowBottomCircle;

export const ArrowBottomSquare = enhancerIcon('arrow-bottom-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="7" x2="12" y2="21" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M14 3v4h-4v-4z" />
</svg>
));
ArrowBottomSquare.displayName = 'ArrowBottomSquare';
all['arrow-bottom-square'] = ArrowBottomSquare;

export const ArrowBottomTail = enhancerIcon('arrow-bottom-tail', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="6" x2="12" y2="21" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M9 3l3 3l3 -3" />
</svg>
));
ArrowBottomTail.displayName = 'ArrowBottomTail';
all['arrow-bottom-tail'] = ArrowBottomTail;

export const ArrowDownCircle = enhancerIcon('arrow-down-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="8" y1="12" x2="12" y2="16" />
  <line x1="12" y1="8" x2="12" y2="16" />
  <line x1="16" y1="12" x2="12" y2="16" />
</svg>
));
ArrowDownCircle.displayName = 'ArrowDownCircle';
all['arrow-down-circle'] = ArrowDownCircle;

export const ArrowDownLeftCircle = enhancerIcon('arrow-down-left-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="15" y1="9" x2="9" y2="15" />
  <polyline points="15 15 9 15 9 9" />
</svg>
));
ArrowDownLeftCircle.displayName = 'ArrowDownLeftCircle';
all['arrow-down-left-circle'] = ArrowDownLeftCircle;

export const ArrowDownLeft = enhancerIcon('arrow-down-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="7" x2="7" y2="17" />
  <polyline points="16 17 7 17 7 8" />
</svg>
));
ArrowDownLeft.displayName = 'ArrowDownLeft';
all['arrow-down-left'] = ArrowDownLeft;

export const ArrowDownRightCircle = enhancerIcon('arrow-down-right-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="15" y1="15" x2="9" y2="15" />
  <polyline points="15 9 15 15 9 9" />
</svg>
));
ArrowDownRightCircle.displayName = 'ArrowDownRightCircle';
all['arrow-down-right-circle'] = ArrowDownRightCircle;

export const ArrowDownRight = enhancerIcon('arrow-down-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="7" x2="17" y2="17" />
  <polyline points="17 8 17 17 8 17" />
</svg>
));
ArrowDownRight.displayName = 'ArrowDownRight';
all['arrow-down-right'] = ArrowDownRight;

export const ArrowDown = enhancerIcon('arrow-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="18" y1="13" x2="12" y2="19" />
  <line x1="6" y1="13" x2="12" y2="19" />
</svg>
));
ArrowDown.displayName = 'ArrowDown';
all['arrow-down'] = ArrowDown;

export const ArrowForwardUp = enhancerIcon('arrow-forward-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" />
</svg>
));
ArrowForwardUp.displayName = 'ArrowForwardUp';
all['arrow-forward-up'] = ArrowForwardUp;

export const ArrowForward = enhancerIcon('arrow-forward', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
</svg>
));
ArrowForward.displayName = 'ArrowForward';
all['arrow-forward'] = ArrowForward;

export const ArrowLeftBar = enhancerIcon('arrow-left-bar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="21" y1="12" x2="3" y2="12" />
  <path d="M6 9l-3 3l3 3" />
  <line x1="21" y1="9" x2="21" y2="15" />
</svg>
));
ArrowLeftBar.displayName = 'ArrowLeftBar';
all['arrow-left-bar'] = ArrowLeftBar;

export const ArrowLeftCircle = enhancerIcon('arrow-left-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="12" x2="3" y2="12" />
  <path d="M6 9l-3 3l3 3" />
  <circle cx="19" cy="12" r="2" />
</svg>
));
ArrowLeftCircle.displayName = 'ArrowLeftCircle';
all['arrow-left-circle'] = ArrowLeftCircle;

export const ArrowLeftSquare = enhancerIcon('arrow-left-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="12" x2="3" y2="12" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M21 14h-4v-4h4z" />
</svg>
));
ArrowLeftSquare.displayName = 'ArrowLeftSquare';
all['arrow-left-square'] = ArrowLeftSquare;

export const ArrowLeftTail = enhancerIcon('arrow-left-tail', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="18" y1="12" x2="3" y2="12" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M21 9l-3 3l3 3" />
</svg>
));
ArrowLeftTail.displayName = 'ArrowLeftTail';
all['arrow-left-tail'] = ArrowLeftTail;

export const ArrowLeft = enhancerIcon('arrow-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <line x1="5" y1="12" x2="11" y2="18" />
  <line x1="5" y1="12" x2="11" y2="6" />
</svg>
));
ArrowLeft.displayName = 'ArrowLeft';
all['arrow-left'] = ArrowLeft;

export const ArrowLoopLeft = enhancerIcon('arrow-loop-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 21v-13a4 4 0 1 1 4 4h-13" />
  <path d="M7 15l-3 -3l3 -3" />
</svg>
));
ArrowLoopLeft.displayName = 'ArrowLoopLeft';
all['arrow-loop-left'] = ArrowLoopLeft;

export const ArrowLoopRight = enhancerIcon('arrow-loop-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21v-13a4 4 0 1 0 -4 4h13" />
  <path d="M18 15l3 -3l-3 -3" />
</svg>
));
ArrowLoopRight.displayName = 'ArrowLoopRight';
all['arrow-loop-right'] = ArrowLoopRight;

export const ArrowNarrowDown = enhancerIcon('arrow-narrow-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="16" y1="15" x2="12" y2="19" />
  <line x1="8" y1="15" x2="12" y2="19" />
</svg>
));
ArrowNarrowDown.displayName = 'ArrowNarrowDown';
all['arrow-narrow-down'] = ArrowNarrowDown;

export const ArrowNarrowLeft = enhancerIcon('arrow-narrow-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <line x1="5" y1="12" x2="9" y2="16" />
  <line x1="5" y1="12" x2="9" y2="8" />
</svg>
));
ArrowNarrowLeft.displayName = 'ArrowNarrowLeft';
all['arrow-narrow-left'] = ArrowNarrowLeft;

export const ArrowNarrowRight = enhancerIcon('arrow-narrow-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <line x1="15" y1="16" x2="19" y2="12" />
  <line x1="15" y1="8" x2="19" y2="12" />
</svg>
));
ArrowNarrowRight.displayName = 'ArrowNarrowRight';
all['arrow-narrow-right'] = ArrowNarrowRight;

export const ArrowNarrowUp = enhancerIcon('arrow-narrow-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="16" y1="9" x2="12" y2="5" />
  <line x1="8" y1="9" x2="12" y2="5" />
</svg>
));
ArrowNarrowUp.displayName = 'ArrowNarrowUp';
all['arrow-narrow-up'] = ArrowNarrowUp;

export const ArrowRampLeft = enhancerIcon('arrow-ramp-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="3" x2="17" y2="11.707" />
  <path d="M13 7l4 -4l4 4" />
  <path d="M7 14l-4 -4l4 -4" />
  <path d="M17 21a11 11 0 0 0 -11 -11h-3" />
</svg>
));
ArrowRampLeft.displayName = 'ArrowRampLeft';
all['arrow-ramp-left'] = ArrowRampLeft;

export const ArrowRampRight = enhancerIcon('arrow-ramp-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="3" x2="7" y2="11.707" />
  <path d="M11 7l-4 -4l-4 4" />
  <path d="M17 14l4 -4l-4 -4" />
  <path d="M7 21a11 11 0 0 1 11 -11h3" />
</svg>
));
ArrowRampRight.displayName = 'ArrowRampRight';
all['arrow-ramp-right'] = ArrowRampRight;

export const ArrowRightBar = enhancerIcon('arrow-right-bar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l3 -3l-3 -3" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="9" x2="3" y2="15" />
</svg>
));
ArrowRightBar.displayName = 'ArrowRightBar';
all['arrow-right-bar'] = ArrowRightBar;

export const ArrowRightCircle = enhancerIcon('arrow-right-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l3 -3l-3 -3" />
  <circle cx="5" cy="12" r="2" />
  <line x1="7" y1="12" x2="21" y2="12" />
</svg>
));
ArrowRightCircle.displayName = 'ArrowRightCircle';
all['arrow-right-circle'] = ArrowRightCircle;

export const ArrowRightSquare = enhancerIcon('arrow-right-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="12" x2="21" y2="12" />
  <path d="M18 15l3 -3l-3 -3" />
  <path d="M3 10h4v4h-4z" />
</svg>
));
ArrowRightSquare.displayName = 'ArrowRightSquare';
all['arrow-right-square'] = ArrowRightSquare;

export const ArrowRightTail = enhancerIcon('arrow-right-tail', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l3 -3l-3 -3" />
  <path d="M3 15l3 -3l-3 -3" />
  <line x1="6" y1="12" x2="21" y2="12" />
</svg>
));
ArrowRightTail.displayName = 'ArrowRightTail';
all['arrow-right-tail'] = ArrowRightTail;

export const ArrowRight = enhancerIcon('arrow-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <line x1="13" y1="18" x2="19" y2="12" />
  <line x1="13" y1="6" x2="19" y2="12" />
</svg>
));
ArrowRight.displayName = 'ArrowRight';
all['arrow-right'] = ArrowRight;

export const ArrowTopBar = enhancerIcon('arrow-top-bar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="21" x2="12" y2="3" />
  <path d="M15 6l-3 -3l-3 3" />
  <line x1="9" y1="21" x2="15" y2="21" />
</svg>
));
ArrowTopBar.displayName = 'ArrowTopBar';
all['arrow-top-bar'] = ArrowTopBar;

export const ArrowTopCircle = enhancerIcon('arrow-top-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="17" x2="12" y2="3" />
  <path d="M15 6l-3 -3l-3 3" />
  <circle cx="12" cy="19" r="2" />
</svg>
));
ArrowTopCircle.displayName = 'ArrowTopCircle';
all['arrow-top-circle'] = ArrowTopCircle;

export const ArrowTopSquare = enhancerIcon('arrow-top-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="17" x2="12" y2="3" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M10 21v-4h4v4z" />
</svg>
));
ArrowTopSquare.displayName = 'ArrowTopSquare';
all['arrow-top-square'] = ArrowTopSquare;

export const ArrowTopTail = enhancerIcon('arrow-top-tail', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="18" x2="12" y2="3" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M15 21l-3 -3l-3 3" />
</svg>
));
ArrowTopTail.displayName = 'ArrowTopTail';
all['arrow-top-tail'] = ArrowTopTail;

export const ArrowUpCircle = enhancerIcon('arrow-up-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="8" x2="8" y2="12" />
  <line x1="12" y1="8" x2="12" y2="16" />
  <line x1="16" y1="12" x2="12" y2="8" />
</svg>
));
ArrowUpCircle.displayName = 'ArrowUpCircle';
all['arrow-up-circle'] = ArrowUpCircle;

export const ArrowUpLeftCircle = enhancerIcon('arrow-up-left-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="9" x2="15" y2="15" />
  <polyline points="15 9 9 9 9 15" />
</svg>
));
ArrowUpLeftCircle.displayName = 'ArrowUpLeftCircle';
all['arrow-up-left-circle'] = ArrowUpLeftCircle;

export const ArrowUpLeft = enhancerIcon('arrow-up-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="7" x2="17" y2="17" />
  <polyline points="16 7 7 7 7 16" />
</svg>
));
ArrowUpLeft.displayName = 'ArrowUpLeft';
all['arrow-up-left'] = ArrowUpLeft;

export const ArrowUpRightCircle = enhancerIcon('arrow-up-right-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="15" y1="9" x2="9" y2="15" />
  <polyline points="15 15 15 9 9 9" />
</svg>
));
ArrowUpRightCircle.displayName = 'ArrowUpRightCircle';
all['arrow-up-right-circle'] = ArrowUpRightCircle;

export const ArrowUpRight = enhancerIcon('arrow-up-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="7" x2="7" y2="17" />
  <polyline points="8 7 17 7 17 16" />
</svg>
));
ArrowUpRight.displayName = 'ArrowUpRight';
all['arrow-up-right'] = ArrowUpRight;

export const ArrowUp = enhancerIcon('arrow-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="18" y1="11" x2="12" y2="5" />
  <line x1="6" y1="11" x2="12" y2="5" />
</svg>
));
ArrowUp.displayName = 'ArrowUp';
all['arrow-up'] = ArrowUp;

export const ArrowWaveLeftDown = enhancerIcon('arrow-wave-left-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 13.998h-4v-4" />
  <path d="M21 11.998c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3.113 -.716 -4 -2s-2.48 -2.033 -4 -2c-1.52 -.033 -3 1 -4 2l-2 2" />
</svg>
));
ArrowWaveLeftDown.displayName = 'ArrowWaveLeftDown';
all['arrow-wave-left-down'] = ArrowWaveLeftDown;

export const ArrowWaveLeftUp = enhancerIcon('arrow-wave-left-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 9.996h-4v4" />
  <path d="M21 11.996c-.887 -1.285 -2.48 -2.033 -4 -2c-1.52 -.033 -3.113 .715 -4 2c-.887 1.284 -2.48 2.033 -4 2c-1.52 .033 -3 -1 -4 -2l-2 -2" />
</svg>
));
ArrowWaveLeftUp.displayName = 'ArrowWaveLeftUp';
all['arrow-wave-left-up'] = ArrowWaveLeftUp;

export const ArrowWaveRightDown = enhancerIcon('arrow-wave-right-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 13.998h4v-4" />
  <path d="M3 11.998c.887 1.284 2.48 2.033 4 2c1.52 .033 3.113 -.716 4 -2s2.48 -2.033 4 -2c1.52 -.033 3 1 4 2l2 2" />
</svg>
));
ArrowWaveRightDown.displayName = 'ArrowWaveRightDown';
all['arrow-wave-right-down'] = ArrowWaveRightDown;

export const ArrowWaveRightUp = enhancerIcon('arrow-wave-right-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 10h4v4" />
  <path d="M3 12c.887 -1.284 2.48 -2.033 4 -2c1.52 -.033 3.113 .716 4 2s2.48 2.033 4 2c1.52 .033 3 -1 4 -2l2 -2" />
</svg>
));
ArrowWaveRightUp.displayName = 'ArrowWaveRightUp';
all['arrow-wave-right-up'] = ArrowWaveRightUp;

export const ArrowsDiagonal2 = enhancerIcon('arrows-diagonal-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="16 20 20 20 20 16" />
  <line x1="14" y1="14" x2="20" y2="20" />
  <polyline points="8 4 4 4 4 8" />
  <line x1="4" y1="4" x2="10" y2="10" />
</svg>
));
ArrowsDiagonal2.displayName = 'ArrowsDiagonal2';
all['arrows-diagonal-2'] = ArrowsDiagonal2;

export const ArrowsDiagonal = enhancerIcon('arrows-diagonal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="16 4 20 4 20 8" />
  <line x1="14" y1="10" x2="20" y2="4" />
  <polyline points="8 20 4 20 4 16" />
  <line x1="4" y1="20" x2="10" y2="14" />
</svg>
));
ArrowsDiagonal.displayName = 'ArrowsDiagonal';
all['arrows-diagonal'] = ArrowsDiagonal;

export const ArrowsDoubleNeSw = enhancerIcon('arrows-double-ne-sw', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 14l11 -11" />
  <path d="M10 3h4v4" />
  <path d="M10 17v4h4" />
  <path d="M21 10l-11 11" />
</svg>
));
ArrowsDoubleNeSw.displayName = 'ArrowsDoubleNeSw';
all['arrows-double-ne-sw'] = ArrowsDoubleNeSw;

export const ArrowsDoubleNwSe = enhancerIcon('arrows-double-nw-se', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 21l-11 -11" />
  <path d="M3 14v-4h4" />
  <path d="M17 14h4v-4" />
  <line x1="10" y1="3" x2="21" y2="14" />
</svg>
));
ArrowsDoubleNwSe.displayName = 'ArrowsDoubleNwSe';
all['arrows-double-nw-se'] = ArrowsDoubleNwSe;

export const ArrowsDoubleSeNw = enhancerIcon('arrows-double-se-nw', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="10" x2="14" y2="21" />
  <path d="M14 17v4h-4" />
  <path d="M14 3h-4v4" />
  <path d="M21 14l-11 -11" />
</svg>
));
ArrowsDoubleSeNw.displayName = 'ArrowsDoubleSeNw';
all['arrows-double-se-nw'] = ArrowsDoubleSeNw;

export const ArrowsDoubleSwNe = enhancerIcon('arrows-double-sw-ne', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3l-11 11" />
  <path d="M3 10v4h4" />
  <path d="M17 10h4v4" />
  <path d="M10 21l11 -11" />
</svg>
));
ArrowsDoubleSwNe.displayName = 'ArrowsDoubleSwNe';
all['arrows-double-sw-ne'] = ArrowsDoubleSwNe;

export const ArrowsDownUp = enhancerIcon('arrows-down-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="3" x2="17" y2="21" />
  <path d="M10 18l-3 3l-3 -3" />
  <line x1="7" y1="21" x2="7" y2="3" />
  <path d="M20 6l-3 -3l-3 3" />
</svg>
));
ArrowsDownUp.displayName = 'ArrowsDownUp';
all['arrows-down-up'] = ArrowsDownUp;

export const ArrowsDown = enhancerIcon('arrows-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="21" x2="7" y2="3" />
  <path d="M20 18l-3 3l-3 -3" />
  <path d="M4 18l3 3l3 -3" />
  <line x1="17" y1="21" x2="17" y2="3" />
</svg>
));
ArrowsDown.displayName = 'ArrowsDown';
all['arrows-down'] = ArrowsDown;

export const ArrowsHorizontal = enhancerIcon('arrows-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 8 3 12 7 16" />
  <polyline points="17 8 21 12 17 16" />
  <line x1="3" y1="12" x2="21" y2="12" />
</svg>
));
ArrowsHorizontal.displayName = 'ArrowsHorizontal';
all['arrows-horizontal'] = ArrowsHorizontal;

export const ArrowsJoin2 = enhancerIcon('arrows-join-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 7h1.948c1.913 0 3.705 .933 4.802 2.5a5.861 5.861 0 0 0 4.802 2.5h6.448" />
  <path d="M3 17h1.95a5.854 5.854 0 0 0 4.798 -2.5a5.854 5.854 0 0 1 4.798 -2.5h5.454" />
  <path d="M18 15l3 -3l-3 -3" />
</svg>
));
ArrowsJoin2.displayName = 'ArrowsJoin2';
all['arrows-join-2'] = ArrowsJoin2;

export const ArrowsJoin = enhancerIcon('arrows-join', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 7h5l3.5 5h9.5" />
  <path d="M3 17h5l3.495 -5" />
  <path d="M18 15l3 -3l-3 -3" />
</svg>
));
ArrowsJoin.displayName = 'ArrowsJoin';
all['arrows-join'] = ArrowsJoin;

export const ArrowsLeftRight = enhancerIcon('arrows-left-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="21" y1="17" x2="3" y2="17" />
  <path d="M6 10l-3 -3l3 -3" />
  <line x1="3" y1="7" x2="21" y2="7" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>
));
ArrowsLeftRight.displayName = 'ArrowsLeftRight';
all['arrows-left-right'] = ArrowsLeftRight;

export const ArrowsLeft = enhancerIcon('arrows-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="7" x2="21" y2="7" />
  <path d="M6 20l-3 -3l3 -3" />
  <path d="M6 4l-3 3l3 3" />
  <line x1="3" y1="17" x2="21" y2="17" />
</svg>
));
ArrowsLeft.displayName = 'ArrowsLeft';
all['arrows-left'] = ArrowsLeft;

export const ArrowsMaximize = enhancerIcon('arrows-maximize', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="16 4 20 4 20 8" />
  <line x1="14" y1="10" x2="20" y2="4" />
  <polyline points="8 20 4 20 4 16" />
  <line x1="4" y1="20" x2="10" y2="14" />
  <polyline points="16 20 20 20 20 16" />
  <line x1="14" y1="14" x2="20" y2="20" />
  <polyline points="8 4 4 4 4 8" />
  <line x1="4" y1="4" x2="10" y2="10" />
</svg>
));
ArrowsMaximize.displayName = 'ArrowsMaximize';
all['arrows-maximize'] = ArrowsMaximize;

export const ArrowsMinimize = enhancerIcon('arrows-minimize', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="5 9 9 9 9 5" />
  <line x1="3" y1="3" x2="9" y2="9" />
  <polyline points="5 15 9 15 9 19" />
  <line x1="3" y1="21" x2="9" y2="15" />
  <polyline points="19 9 15 9 15 5" />
  <line x1="15" y1="9" x2="21" y2="3" />
  <polyline points="19 15 15 15 15 19" />
  <line x1="15" y1="15" x2="21" y2="21" />
</svg>
));
ArrowsMinimize.displayName = 'ArrowsMinimize';
all['arrows-minimize'] = ArrowsMinimize;

export const ArrowsRightLeft = enhancerIcon('arrows-right-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="21" y1="7" x2="3" y2="7" />
  <path d="M18 10l3 -3l-3 -3" />
  <path d="M6 20l-3 -3l3 -3" />
  <line x1="3" y1="17" x2="21" y2="17" />
</svg>
));
ArrowsRightLeft.displayName = 'ArrowsRightLeft';
all['arrows-right-left'] = ArrowsRightLeft;

export const ArrowsRight = enhancerIcon('arrows-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="21" y1="17" x2="3" y2="17" />
  <path d="M18 4l3 3l-3 3" />
  <path d="M18 20l3 -3l-3 -3" />
  <line x1="21" y1="7" x2="3" y2="7" />
</svg>
));
ArrowsRight.displayName = 'ArrowsRight';
all['arrows-right'] = ArrowsRight;

export const ArrowsSort = enhancerIcon('arrows-sort', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 9l4 -4l4 4m-4 -4v14" />
  <path d="M21 15l-4 4l-4 -4m4 4v-14" />
</svg>
));
ArrowsSort.displayName = 'ArrowsSort';
all['arrows-sort'] = ArrowsSort;

export const ArrowsSplit2 = enhancerIcon('arrows-split-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 17h-5.397a5 5 0 0 1 -4.096 -2.133l-.514 -.734a5 5 0 0 0 -4.096 -2.133h-3.897" />
  <path d="M21 7h-5.395a5 5 0 0 0 -4.098 2.135l-.51 .73a5 5 0 0 1 -4.097 2.135h-3.9" />
  <path d="M18 10l3 -3l-3 -3" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>
));
ArrowsSplit2.displayName = 'ArrowsSplit2';
all['arrows-split-2'] = ArrowsSplit2;

export const ArrowsSplit = enhancerIcon('arrows-split', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 17h-8l-3.5 -5h-6.5" />
  <path d="M21 7h-8l-3.495 5" />
  <path d="M18 10l3 -3l-3 -3" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>
));
ArrowsSplit.displayName = 'ArrowsSplit';
all['arrows-split'] = ArrowsSplit;

export const ArrowsUpDown = enhancerIcon('arrows-up-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="3" x2="7" y2="21" />
  <path d="M10 6l-3 -3l-3 3" />
  <path d="M20 18l-3 3l-3 -3" />
  <line x1="17" y1="21" x2="17" y2="3" />
</svg>
));
ArrowsUpDown.displayName = 'ArrowsUpDown';
all['arrows-up-down'] = ArrowsUpDown;

export const ArrowsUp = enhancerIcon('arrows-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="3" x2="17" y2="21" />
  <path d="M4 6l3 -3l3 3" />
  <path d="M20 6l-3 -3l-3 3" />
  <line x1="7" y1="3" x2="7" y2="21" />
</svg>
));
ArrowsUp.displayName = 'ArrowsUp';
all['arrows-up'] = ArrowsUp;

export const ArrowsVertical = enhancerIcon('arrows-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="8 7 12 3 16 7" />
  <polyline points="8 17 12 21 16 17" />
  <line x1="12" y1="3" x2="12" y2="21" />
</svg>
));
ArrowsVertical.displayName = 'ArrowsVertical';
all['arrows-vertical'] = ArrowsVertical;

export const Artboard = enhancerIcon('artboard', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="8" y="8" width="8" height="8" rx="1" />
  <line x1="3" y1="8" x2="4" y2="8" />
  <line x1="3" y1="16" x2="4" y2="16" />
  <line x1="8" y1="3" x2="8" y2="4" />
  <line x1="16" y1="3" x2="16" y2="4" />
  <line x1="20" y1="8" x2="21" y2="8" />
  <line x1="20" y1="16" x2="21" y2="16" />
  <line x1="8" y1="20" x2="8" y2="21" />
  <line x1="16" y1="20" x2="16" y2="21" />
</svg>
));
Artboard.displayName = 'Artboard';
all['artboard'] = Artboard;

export const AspectRatio = enhancerIcon('aspect-ratio', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="M7 12v-3h3" />
  <path d="M17 12v3h-3" />
</svg>
));
AspectRatio.displayName = 'AspectRatio';
all['aspect-ratio'] = AspectRatio;

export const At = enhancerIcon('at', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="4" />
  <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
</svg>
));
At.displayName = 'At';
all['at'] = At;

export const Atom2 = enhancerIcon('atom-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="3" />
  <line x1="12" y1="21" x2="12" y2="21.01" />
  <line x1="3" y1="9" x2="3" y2="9.01" />
  <line x1="21" y1="9" x2="21" y2="9.01" />
  <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
  <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
  <path d="M6.2 5a9 9 0 0 1 11.4 0" />
</svg>
));
Atom2.displayName = 'Atom2';
all['atom-2'] = Atom2;

export const Atom = enhancerIcon('atom', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <path d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10" transform="rotate(45 12 12)" />
  <path d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10" transform="rotate(-45 12 12)" />
</svg>
));
Atom.displayName = 'Atom';
all['atom'] = Atom;

export const Award = enhancerIcon('award', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="9" r="6" />
  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" />
  <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" />
</svg>
));
Award.displayName = 'Award';
all['award'] = Award;

export const Backhoe = enhancerIcon('backhoe', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="4" cy="17" r="2" />
  <circle cx="13" cy="17" r="2" />
  <line x1="13" y1="19" x2="4" y2="19" />
  <line x1="4" y1="15" x2="13" y2="15" />
  <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
  <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
  <path d="M21.12 9.88l-3.12 -4.88l-5 5" />
  <path d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z" />
</svg>
));
Backhoe.displayName = 'Backhoe';
all['backhoe'] = Backhoe;

export const Backspace = enhancerIcon('backspace', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z" />
  <path d="M12 10l4 4m0 -4l-4 4" />
</svg>
));
Backspace.displayName = 'Backspace';
all['backspace'] = Backspace;

export const BallBasketball = enhancerIcon('ball-basketball', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="5.65" y1="5.65" x2="18.35" y2="18.35" />
  <line x1="5.65" y1="18.35" x2="18.35" y2="5.65" />
  <path d="M12 3a9 9 0 0 0 9 9" />
  <path d="M3 12a9 9 0 0 1 9 9" />
</svg>
));
BallBasketball.displayName = 'BallBasketball';
all['ball-basketball'] = BallBasketball;

export const BallBowling = enhancerIcon('ball-bowling', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="11" y1="9" x2="11" y2="9.01" />
  <line x1="15" y1="8" x2="15" y2="8.01" />
  <line x1="14" y1="12" x2="14" y2="12.01" />
</svg>
));
BallBowling.displayName = 'BallBowling';
all['ball-bowling'] = BallBowling;

export const BallTennis = enhancerIcon('ball-tennis', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M6 5.3a9 9 0 0 1 0 13.4" />
  <path d="M18 5.3a9 9 0 0 0 0 13.4" />
</svg>
));
BallTennis.displayName = 'BallTennis';
all['ball-tennis'] = BallTennis;

export const BallVolleyball = enhancerIcon('ball-volleyball', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M12 12a8 8 0 0 0 8 4m-12.5 -2.5a12 12 0 0 0 8.5 6.5" />
  <path d="M12 12a8 8 0 0 0 8 4m-12.5 -2.5a12 12 0 0 0 8.5 6.5" transform="rotate(120 12 12)" />
  <path d="M12 12a8 8 0 0 0 8 4m-12.5 -2.5a12 12 0 0 0 8.5 6.5" transform="rotate(240 12 12)" />
</svg>
));
BallVolleyball.displayName = 'BallVolleyball';
all['ball-volleyball'] = BallVolleyball;

export const Ban = enhancerIcon('ban', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
</svg>
));
Ban.displayName = 'Ban';
all['ban'] = Ban;

export const Bandage = enhancerIcon('bandage', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="14" y1="12" x2="14" y2="12.01" />
  <line x1="10" y1="12" x2="10" y2="12.01" />
  <line x1="12" y1="10" x2="12" y2="10.01" />
  <line x1="12" y1="14" x2="12" y2="14.01" />
  <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
</svg>
));
Bandage.displayName = 'Bandage';
all['bandage'] = Bandage;

export const Barcode = enhancerIcon('barcode', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
  <path d="M4 17v1a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v1" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
  <rect x="5" y="11" width="1" height="2" />
  <line x1="10" y1="11" x2="10" y2="13" />
  <rect x="14" y="11" width="1" height="2" />
  <line x1="19" y1="11" x2="19" y2="13" />
</svg>
));
Barcode.displayName = 'Barcode';
all['barcode'] = Barcode;

export const Basket = enhancerIcon('basket', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 10 12 4 17 10" />
  <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z" />
  <circle cx="12" cy="15" r="2" />
</svg>
));
Basket.displayName = 'Basket';
all['basket'] = Basket;

export const Battery1 = enhancerIcon('battery-1', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
  <line x1="7" y1="10" x2="7" y2="14" />
</svg>
));
Battery1.displayName = 'Battery1';
all['battery-1'] = Battery1;

export const Battery2 = enhancerIcon('battery-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
  <line x1="7" y1="10" x2="7" y2="14" />
  <line x1="10" y1="10" x2="10" y2="14" />
</svg>
));
Battery2.displayName = 'Battery2';
all['battery-2'] = Battery2;

export const Battery3 = enhancerIcon('battery-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
  <line x1="7" y1="10" x2="7" y2="14" />
  <line x1="10" y1="10" x2="10" y2="14" />
  <line x1="13" y1="10" x2="13" y2="14" />
</svg>
));
Battery3.displayName = 'Battery3';
all['battery-3'] = Battery3;

export const Battery4 = enhancerIcon('battery-4', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
  <line x1="7" y1="10" x2="7" y2="14" />
  <line x1="10" y1="10" x2="10" y2="14" />
  <line x1="13" y1="10" x2="13" y2="14" />
  <line x1="16" y1="10" x2="16" y2="14" />
</svg>
));
Battery4.displayName = 'Battery4';
all['battery-4'] = Battery4;

export const BatteryCharging = enhancerIcon('battery-charging', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 7h1a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-2" />
  <path d="M8 7h-2a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1" />
  <path d="M12 8l-2 4h3l-2 4" />
</svg>
));
BatteryCharging.displayName = 'BatteryCharging';
all['battery-charging'] = BatteryCharging;

export const BatteryOff = enhancerIcon('battery-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M11 7h6a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5m-2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h1" />
</svg>
));
BatteryOff.displayName = 'BatteryOff';
all['battery-off'] = BatteryOff;

export const Battery = enhancerIcon('battery', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
</svg>
));
Battery.displayName = 'Battery';
all['battery'] = Battery;

export const Bed = enhancerIcon('bed', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />
  <circle cx="7" cy="10" r="1" />
</svg>
));
Bed.displayName = 'Bed';
all['bed'] = Bed;

export const BellMinus = enhancerIcon('bell-minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  <line x1="10" y1="11" x2="14" y2="11" />
</svg>
));
BellMinus.displayName = 'BellMinus';
all['bell-minus'] = BellMinus;

export const BellOff = enhancerIcon('bell-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M17 17h-13a4 4 0 0 0 2 -3v-3a7 7 0 0 1 1.279 -3.716m2.072 -1.934c.209 -.127 .425 -.244 .649 -.35a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
</svg>
));
BellOff.displayName = 'BellOff';
all['bell-off'] = BellOff;

export const BellPlus = enhancerIcon('bell-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  <line x1="10" y1="11" x2="14" y2="11" />
  <line x1="12" y1="9" x2="12" y2="13" />
</svg>
));
BellPlus.displayName = 'BellPlus';
all['bell-plus'] = BellPlus;

export const BellRinging2 = enhancerIcon('bell-ringing-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1 -1.414 7.072l-2.122 2.12a4 4 0 0 0 -.707 3.536l-11.313 -11.312a4 4 0 0 0 3.535 -.707l2.121 -2.123a7 7 0 0 1 7.072 -1.414a2 2 0 0 1 2.828 0z" />
  <path d="M7.343 12.414l-.707 .707a3 3 0 0 0 4.243 4.243l.707 -.707" />
</svg>
));
BellRinging2.displayName = 'BellRinging2';
all['bell-ringing-2'] = BellRinging2;

export const BellRinging = enhancerIcon('bell-ringing', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
  <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
</svg>
));
BellRinging.displayName = 'BellRinging';
all['bell-ringing'] = BellRinging;

export const BellX = enhancerIcon('bell-x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  <path d="M10.5 9.5l3 3m0 -3l-3 3" />
</svg>
));
BellX.displayName = 'BellX';
all['bell-x'] = BellX;

export const Bell = enhancerIcon('bell', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
</svg>
));
Bell.displayName = 'Bell';
all['bell'] = Bell;

export const Bike = enhancerIcon('bike', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="18" r="3" />
  <circle cx="19" cy="18" r="3" />
  <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />
  <circle cx="17" cy="5" r="1" />
</svg>
));
Bike.displayName = 'Bike';
all['bike'] = Bike;

export const Biohazard = enhancerIcon('biohazard', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="2" />
  <path d="M11.939 14c0 .173 .048 .351 .056 .533l0 .217a4.75 4.75 0 0 1 -4.533 4.745l-.217 0m-4.75 -4.75a4.75 4.75 0 0 1 7.737 -3.693m6.513 8.443a4.75 4.75 0 0 1 -4.69 -5.503l-.06 0m1.764 -2.944a4.75 4.75 0 0 1 7.731 3.477l0 .217m-11.195 -3.813a4.75 4.75 0 0 1 -1.828 -7.624l.164 -.172m6.718 0a4.75 4.75 0 0 1 -1.665 7.798" />
</svg>
));
Biohazard.displayName = 'Biohazard';
all['biohazard'] = Biohazard;

export const BluetoothConnected = enhancerIcon('bluetooth-connected', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 8 17 16 12 20 12 4 17 8 7 16" />
  <line x1="4" y1="12" x2="5" y2="12" />
  <line x1="18" y1="12" x2="19" y2="12" />
</svg>
));
BluetoothConnected.displayName = 'BluetoothConnected';
all['bluetooth-connected'] = BluetoothConnected;

export const BluetoothOff = enhancerIcon('bluetooth-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M16.438 16.45l-4.438 3.55v-8m0 -4v-4l5 4l-2.776 2.22m-2.222 1.779l-5 4" />
</svg>
));
BluetoothOff.displayName = 'BluetoothOff';
all['bluetooth-off'] = BluetoothOff;

export const Bluetooth = enhancerIcon('bluetooth', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 8 17 16 12 20 12 4 17 8 7 16" />
</svg>
));
Bluetooth.displayName = 'Bluetooth';
all['bluetooth'] = Bluetooth;

export const Bold = enhancerIcon('bold', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
  <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
</svg>
));
Bold.displayName = 'Bold';
all['bold'] = Bold;

export const BoltOff = enhancerIcon('bolt-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M15.212 15.21l-4.212 5.79v-7h-6l3.79 -5.21m1.685 -2.32l2.525 -3.47v6m1 1h5l-2.104 2.893" />
</svg>
));
BoltOff.displayName = 'BoltOff';
all['bolt-off'] = BoltOff;

export const Bolt = enhancerIcon('bolt', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
</svg>
));
Bolt.displayName = 'Bolt';
all['bolt'] = Bolt;

export const Bone = enhancerIcon('bone', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 3a3 3 0 0 1 3 3a3 3 0 1 1 -2.12 5.122l-4.758 4.758a3 3 0 1 1 -5.117 2.297l-.005 -.177l-.176 -.005a3 3 0 1 1 2.298 -5.115l4.758 -4.758a3 3 0 0 1 2.12 -5.122z" />
</svg>
));
Bone.displayName = 'Bone';
all['bone'] = Bone;

export const Book = enhancerIcon('book', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <line x1="3" y1="6" x2="3" y2="19" />
  <line x1="12" y1="6" x2="12" y2="19" />
  <line x1="21" y1="6" x2="21" y2="19" />
</svg>
));
Book.displayName = 'Book';
all['book'] = Book;

export const BookmarkOff = enhancerIcon('bookmark-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M17 17v3l-5 -3l-5 3v-13m1.178 -2.818c.252 -.113 .53 -.176 .822 -.176h6a2 2 0 0 1 2 2v7" />
</svg>
));
BookmarkOff.displayName = 'BookmarkOff';
all['bookmark-off'] = BookmarkOff;

export const Bookmark = enhancerIcon('bookmark', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
</svg>
));
Bookmark.displayName = 'Bookmark';
all['bookmark'] = Bookmark;

export const Bookmarks = enhancerIcon('bookmarks', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z" />
  <path d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6" />
</svg>
));
Bookmarks.displayName = 'Bookmarks';
all['bookmarks'] = Bookmarks;

export const BorderAll = enhancerIcon('border-all', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="12" y1="4" x2="12" y2="20" />
</svg>
));
BorderAll.displayName = 'BorderAll';
all['border-all'] = BorderAll;

export const BorderBottom = enhancerIcon('border-bottom', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="20" y1="20" x2="4" y2="20" />
  <line x1="4" y1="4" x2="4" y2="4.01" />
  <line x1="8" y1="4" x2="8" y2="4.01" />
  <line x1="12" y1="4" x2="12" y2="4.01" />
  <line x1="16" y1="4" x2="16" y2="4.01" />
  <line x1="20" y1="4" x2="20" y2="4.01" />
  <line x1="4" y1="8" x2="4" y2="8.01" />
  <line x1="12" y1="8" x2="12" y2="8.01" />
  <line x1="20" y1="8" x2="20" y2="8.01" />
  <line x1="4" y1="12" x2="4" y2="12.01" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
  <line x1="20" y1="12" x2="20" y2="12.01" />
  <line x1="4" y1="16" x2="4" y2="16.01" />
  <line x1="12" y1="16" x2="12" y2="16.01" />
  <line x1="20" y1="16" x2="20" y2="16.01" />
</svg>
));
BorderBottom.displayName = 'BorderBottom';
all['border-bottom'] = BorderBottom;

export const BorderHorizontal = enhancerIcon('border-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="4" x2="4" y2="4.01" />
  <line x1="8" y1="4" x2="8" y2="4.01" />
  <line x1="12" y1="4" x2="12" y2="4.01" />
  <line x1="16" y1="4" x2="16" y2="4.01" />
  <line x1="20" y1="4" x2="20" y2="4.01" />
  <line x1="4" y1="8" x2="4" y2="8.01" />
  <line x1="12" y1="8" x2="12" y2="8.01" />
  <line x1="20" y1="8" x2="20" y2="8.01" />
  <line x1="4" y1="16" x2="4" y2="16.01" />
  <line x1="12" y1="16" x2="12" y2="16.01" />
  <line x1="20" y1="16" x2="20" y2="16.01" />
  <line x1="4" y1="20" x2="4" y2="20.01" />
  <line x1="8" y1="20" x2="8" y2="20.01" />
  <line x1="12" y1="20" x2="12" y2="20.01" />
  <line x1="16" y1="20" x2="16" y2="20.01" />
  <line x1="20" y1="20" x2="20" y2="20.01" />
</svg>
));
BorderHorizontal.displayName = 'BorderHorizontal';
all['border-horizontal'] = BorderHorizontal;

export const BorderInner = enhancerIcon('border-inner', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="12" y1="4" x2="12" y2="20" />
  <line x1="4" y1="4" x2="4" y2="4.01" />
  <line x1="8" y1="4" x2="8" y2="4.01" />
  <line x1="16" y1="4" x2="16" y2="4.01" />
  <line x1="20" y1="4" x2="20" y2="4.01" />
  <line x1="4" y1="8" x2="4" y2="8.01" />
  <line x1="20" y1="8" x2="20" y2="8.01" />
  <line x1="4" y1="16" x2="4" y2="16.01" />
  <line x1="20" y1="16" x2="20" y2="16.01" />
  <line x1="4" y1="20" x2="4" y2="20.01" />
  <line x1="8" y1="20" x2="8" y2="20.01" />
  <line x1="16" y1="20" x2="16" y2="20.01" />
  <line x1="20" y1="20" x2="20" y2="20.01" />
</svg>
));
BorderInner.displayName = 'BorderInner';
all['border-inner'] = BorderInner;

export const BorderLeft = enhancerIcon('border-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="4" y2="4" />
  <line x1="8" y1="4" x2="8" y2="4.01" />
  <line x1="12" y1="4" x2="12" y2="4.01" />
  <line x1="16" y1="4" x2="16" y2="4.01" />
  <line x1="20" y1="4" x2="20" y2="4.01" />
  <line x1="12" y1="8" x2="12" y2="8.01" />
  <line x1="20" y1="8" x2="20" y2="8.01" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
  <line x1="20" y1="12" x2="20" y2="12.01" />
  <line x1="12" y1="16" x2="12" y2="16.01" />
  <line x1="20" y1="16" x2="20" y2="16.01" />
  <line x1="8" y1="20" x2="8" y2="20.01" />
  <line x1="12" y1="20" x2="12" y2="20.01" />
  <line x1="16" y1="20" x2="16" y2="20.01" />
  <line x1="20" y1="20" x2="20" y2="20.01" />
</svg>
));
BorderLeft.displayName = 'BorderLeft';
all['border-left'] = BorderLeft;

export const BorderNone = enhancerIcon('border-none', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="4" x2="4" y2="4.01" />
  <line x1="8" y1="4" x2="8" y2="4.01" />
  <line x1="12" y1="4" x2="12" y2="4.01" />
  <line x1="16" y1="4" x2="16" y2="4.01" />
  <line x1="20" y1="4" x2="20" y2="4.01" />
  <line x1="4" y1="8" x2="4" y2="8.01" />
  <line x1="12" y1="8" x2="12" y2="8.01" />
  <line x1="20" y1="8" x2="20" y2="8.01" />
  <line x1="4" y1="12" x2="4" y2="12.01" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
  <line x1="20" y1="12" x2="20" y2="12.01" />
  <line x1="4" y1="16" x2="4" y2="16.01" />
  <line x1="12" y1="16" x2="12" y2="16.01" />
  <line x1="20" y1="16" x2="20" y2="16.01" />
  <line x1="4" y1="20" x2="4" y2="20.01" />
  <line x1="8" y1="20" x2="8" y2="20.01" />
  <line x1="12" y1="20" x2="12" y2="20.01" />
  <line x1="16" y1="20" x2="16" y2="20.01" />
  <line x1="20" y1="20" x2="20" y2="20.01" />
</svg>
));
BorderNone.displayName = 'BorderNone';
all['border-none'] = BorderNone;

export const BorderOuter = enhancerIcon('border-outer', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="12" y1="8" x2="12" y2="8.01" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
  <line x1="12" y1="16" x2="12" y2="16.01" />
</svg>
));
BorderOuter.displayName = 'BorderOuter';
all['border-outer'] = BorderOuter;

export const BorderRadius = enhancerIcon('border-radius', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v-4a4 4 0 0 1 4 -4h4" />
  <line x1="16" y1="4" x2="16" y2="4.01" />
  <line x1="20" y1="4" x2="20" y2="4.01" />
  <line x1="20" y1="8" x2="20" y2="8.01" />
  <line x1="20" y1="12" x2="20" y2="12.01" />
  <line x1="4" y1="16" x2="4" y2="16.01" />
  <line x1="20" y1="16" x2="20" y2="16.01" />
  <line x1="4" y1="20" x2="4" y2="20.01" />
  <line x1="8" y1="20" x2="8" y2="20.01" />
  <line x1="12" y1="20" x2="12" y2="20.01" />
  <line x1="16" y1="20" x2="16" y2="20.01" />
  <line x1="20" y1="20" x2="20" y2="20.01" />
</svg>
));
BorderRadius.displayName = 'BorderRadius';
all['border-radius'] = BorderRadius;

export const BorderRight = enhancerIcon('border-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="20" y1="4" x2="20" y2="20" />
  <line x1="4" y1="4" x2="4" y2="4.01" />
  <line x1="8" y1="4" x2="8" y2="4.01" />
  <line x1="12" y1="4" x2="12" y2="4.01" />
  <line x1="16" y1="4" x2="16" y2="4.01" />
  <line x1="4" y1="8" x2="4" y2="8.01" />
  <line x1="12" y1="8" x2="12" y2="8.01" />
  <line x1="4" y1="12" x2="4" y2="12.01" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
  <line x1="4" y1="16" x2="4" y2="16.01" />
  <line x1="12" y1="16" x2="12" y2="16.01" />
  <line x1="4" y1="20" x2="4" y2="20.01" />
  <line x1="8" y1="20" x2="8" y2="20.01" />
  <line x1="12" y1="20" x2="12" y2="20.01" />
  <line x1="16" y1="20" x2="16" y2="20.01" />
</svg>
));
BorderRight.displayName = 'BorderRight';
all['border-right'] = BorderRight;

export const BorderTop = enhancerIcon('border-top', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="4" x2="20" y2="4" />
  <line x1="4" y1="8" x2="4" y2="8.01" />
  <line x1="12" y1="8" x2="12" y2="8.01" />
  <line x1="20" y1="8" x2="20" y2="8.01" />
  <line x1="4" y1="12" x2="4" y2="12.01" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
  <line x1="20" y1="12" x2="20" y2="12.01" />
  <line x1="4" y1="16" x2="4" y2="16.01" />
  <line x1="12" y1="16" x2="12" y2="16.01" />
  <line x1="20" y1="16" x2="20" y2="16.01" />
  <line x1="4" y1="20" x2="4" y2="20.01" />
  <line x1="8" y1="20" x2="8" y2="20.01" />
  <line x1="12" y1="20" x2="12" y2="20.01" />
  <line x1="16" y1="20" x2="16" y2="20.01" />
  <line x1="20" y1="20" x2="20" y2="20.01" />
</svg>
));
BorderTop.displayName = 'BorderTop';
all['border-top'] = BorderTop;

export const BorderVertical = enhancerIcon('border-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="4" x2="12" y2="20" />
  <line x1="4" y1="4" x2="4" y2="4.01" />
  <line x1="8" y1="4" x2="8" y2="4.01" />
  <line x1="16" y1="4" x2="16" y2="4.01" />
  <line x1="20" y1="4" x2="20" y2="4.01" />
  <line x1="4" y1="8" x2="4" y2="8.01" />
  <line x1="20" y1="8" x2="20" y2="8.01" />
  <line x1="4" y1="12" x2="4" y2="12.01" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
  <line x1="20" y1="12" x2="20" y2="12.01" />
  <line x1="4" y1="16" x2="4" y2="16.01" />
  <line x1="20" y1="16" x2="20" y2="16.01" />
  <line x1="4" y1="20" x2="4" y2="20.01" />
  <line x1="8" y1="20" x2="8" y2="20.01" />
  <line x1="16" y1="20" x2="16" y2="20.01" />
  <line x1="20" y1="20" x2="20" y2="20.01" />
</svg>
));
BorderVertical.displayName = 'BorderVertical';
all['border-vertical'] = BorderVertical;

export const Box = enhancerIcon('box', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
  <line x1="12" y1="12" x2="20" y2="7.5" />
  <line x1="12" y1="12" x2="12" y2="21" />
  <line x1="12" y1="12" x2="4" y2="7.5" />
</svg>
));
Box.displayName = 'Box';
all['box'] = Box;

export const Braces = enhancerIcon('braces', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2" />
  <path d="M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2" />
</svg>
));
Braces.displayName = 'Braces';
all['braces'] = Braces;

export const Brackets = enhancerIcon('brackets', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 4h-3v16h3" />
  <path d="M16 4h3v16h-3" />
</svg>
));
Brackets.displayName = 'Brackets';
all['brackets'] = Brackets;

export const BrandAirbnb = enhancerIcon('brand-airbnb', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 10c-2 0 -3 1 -3 3c0 1.5 1.494 3.535 3 5.5c1 1 1.5 1.5 2.5 2s2.5 1 4.5 -.5s1.5 -3.5 .5 -6s-2.333 -5.5 -5 -9.5c-.834 -1 -1.5 -1.5 -2.503 -1.5c-1 0 -1.623 .45 -2.497 1.5c-2.667 4 -4 7 -5 9.5s-1.5 4.5 .5 6s3.5 1 4.5 .5s1.5 -1 2.5 -2c1.506 -1.965 3 -4 3 -5.5c0 -2 -1 -3 -3 -3z" />
</svg>
));
BrandAirbnb.displayName = 'BrandAirbnb';
all['brand-airbnb'] = BrandAirbnb;

export const BrandAndroid = enhancerIcon('brand-android', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="10" x2="4" y2="16" />
  <line x1="20" y1="10" x2="20" y2="16" />
  <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
  <line x1="8" y1="3" x2="9" y2="5" />
  <line x1="16" y1="3" x2="15" y2="5" />
  <line x1="9" y1="18" x2="9" y2="21" />
  <line x1="15" y1="18" x2="15" y2="21" />
</svg>
));
BrandAndroid.displayName = 'BrandAndroid';
all['brand-android'] = BrandAndroid;

export const BrandAppleArcade = enhancerIcon('brand-apple-arcade', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="5" r="2" />
  <path d="M20 12.5v4.75a0.734 .734 0 0 1 -.055 .325a0.704 .704 0 0 1 -.348 .366l-5.462 2.58a4.998 4.998 0 0 1 -4.27 0l-5.462 -2.58a0.705 .705 0 0 1 -.401 -.691l-.002 -4.75" />
  <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a0.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a0.691 .691 0 0 1 .028 -1.27z" />
  <line x1="12" y1="7" x2="12" y2="13" />
</svg>
));
BrandAppleArcade.displayName = 'BrandAppleArcade';
all['brand-apple-arcade'] = BrandAppleArcade;

export const BrandApple = enhancerIcon('brand-apple', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
  <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
</svg>
));
BrandApple.displayName = 'BrandApple';
all['brand-apple'] = BrandApple;

export const BrandAppstore = enhancerIcon('brand-appstore', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" />
  <path d="M7 14h5m2.9 0h2.1" />
  <path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1.003 -1.805" />
</svg>
));
BrandAppstore.displayName = 'BrandAppstore';
all['brand-appstore'] = BrandAppstore;

export const BrandAsana = enhancerIcon('brand-asana', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="7" r="3" />
  <circle cx="17" cy="16" r="3" />
  <circle cx="7" cy="16" r="3" />
</svg>
));
BrandAsana.displayName = 'BrandAsana';
all['brand-asana'] = BrandAsana;

export const BrandBehance = enhancerIcon('brand-behance', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
  <line x1="3" y1="12" x2="7.5" y2="12" />
  <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
  <line x1="16" y1="6" x2="19" y2="6" />
</svg>
));
BrandBehance.displayName = 'BrandBehance';
all['brand-behance'] = BrandBehance;

export const BrandBing = enhancerIcon('brand-bing', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 3l4 1.5v12l6 -2.5l-2 -1l-1 -4l7 2.5v4.5l-10 5l-4 -2z" />
</svg>
));
BrandBing.displayName = 'BrandBing';
all['brand-bing'] = BrandBing;

export const BrandBitbucket = enhancerIcon('brand-bitbucket', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3.648 4a0.64 .64 0 0 0 -.64 .744l3.14 14.528c.07 .417 .43 .724 .852 .728h10a0.644 .644 0 0 0 .642 -.539l3.35 -14.71a0.641 .641 0 0 0 -.64 -.744l-16.704 -.007z" />
  <path d="M14 15h-4l-1 -6h6z" />
</svg>
));
BrandBitbucket.displayName = 'BrandBitbucket';
all['brand-bitbucket'] = BrandBitbucket;

export const BrandBooking = enhancerIcon('brand-booking', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 18v-9.5a4.5 4.5 0 0 1 4.5 -4.5h7a4.5 4.5 0 0 1 4.5 4.5v7a4.5 4.5 0 0 1 -4.5 4.5h-9.5a2 2 0 0 1 -2 -2z" />
  <path d="M8 12h3.5a2 2 0 1 1 0 4h-3.5v-7a1 1 0 0 1 1 -1h1.5a2 2 0 1 1 0 4h-1.5" />
  <line x1="16" y1="16" x2="16.01" y2="16" />
</svg>
));
BrandBooking.displayName = 'BrandBooking';
all['brand-booking'] = BrandBooking;

export const BrandChrome = enhancerIcon('brand-chrome', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <circle cx="12" cy="12" r="3" />
  <line x1="12" y1="9" x2="20.4" y2="9" />
  <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(120 12 12)" />
  <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(240 12 12)" />
</svg>
));
BrandChrome.displayName = 'BrandChrome';
all['brand-chrome'] = BrandChrome;

export const BrandCodepen = enhancerIcon('brand-codepen', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
  <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
  <line x1="3" y1="9" x2="3" y2="15" />
  <line x1="21" y1="9" x2="21" y2="15" />
  <line x1="12" y1="3" x2="12" y2="9" />
  <line x1="12" y1="15" x2="12" y2="21" />
</svg>
));
BrandCodepen.displayName = 'BrandCodepen';
all['brand-codepen'] = BrandCodepen;

export const BrandCodesandbox = enhancerIcon('brand-codesandbox', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z" />
  <path d="M12 12l4 -2.25l4 -2.25" />
  <line x1="12" y1="12" x2="12" y2="21" />
  <path d="M12 12l-4 -2.25l-4 -2.25" />
  <path d="M20 12l-4 2v4.75" />
  <path d="M4 12l4 2l0 4.75" />
  <path d="M8 5.25l4 2.25l4 -2.25" />
</svg>
));
BrandCodesandbox.displayName = 'BrandCodesandbox';
all['brand-codesandbox'] = BrandCodesandbox;

export const BrandCss3 = enhancerIcon('brand-css3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
  <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
</svg>
));
BrandCss3.displayName = 'BrandCss3';
all['brand-css3'] = BrandCss3;

export const BrandDeviantart = enhancerIcon('brand-deviantart', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 3v4l-3.857 6h3.857v4h-6.429l-2.571 4h-3v-4l3.857 -6h-3.857v-4h6.429l2.571 -4z" />
</svg>
));
BrandDeviantart.displayName = 'BrandDeviantart';
all['brand-deviantart'] = BrandDeviantart;

export const BrandDiscord = enhancerIcon('brand-discord', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="12" r="1" />
  <circle cx="15" cy="12" r="1" />
  <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0" />
  <path d="M7 16.5c3.5 1 6.5 1 10 0" />
  <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5" />
  <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5" />
</svg>
));
BrandDiscord.displayName = 'BrandDiscord';
all['brand-discord'] = BrandDiscord;

export const BrandDisqus = enhancerIcon('brand-disqus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11.847 21c-2.259 0 -4.323 -.667 -5.919 -2h-3.928l1.708 -3.266c-.545 -1.174 -.759 -2.446 -.758 -3.734c0 -4.97 3.84 -9 8.898 -9c5.052 0 9.152 4.03 9.152 9c0 4.972 -4.098 9 -9.153 9z" />
  <path d="M11.485 15h-1.485v-6h1.485c2.112 0 3.515 .823 3.515 2.981v.035c0 2.18 -1.403 2.984 -3.515 2.984z" />
</svg>
));
BrandDisqus.displayName = 'BrandDisqus';
all['brand-disqus'] = BrandDisqus;

export const BrandDocker = enhancerIcon('brand-docker', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1.002 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z" />
  <path d="M5 10h3v3h-3z" />
  <path d="M8 10h3v3h-3z" />
  <path d="M11 10h3v3h-3z" />
  <path d="M8 7h3v3h-3z" />
  <path d="M11 7h3v3h-3z" />
  <path d="M11 4h3v3h-3z" />
  <path d="M4.571 18.001c1.5 0 2.047 -.074 2.958 -.78" />
  <line x1="10" y1="16" x2="10" y2="16.01" />
</svg>
));
BrandDocker.displayName = 'BrandDocker';
all['brand-docker'] = BrandDocker;

export const BrandDribbble = enhancerIcon('brand-dribbble', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
  <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
  <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
</svg>
));
BrandDribbble.displayName = 'BrandDribbble';
all['brand-dribbble'] = BrandDribbble;

export const BrandEdge = enhancerIcon('brand-edge', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20.978 11.372a9 9 0 1 0 -1.593 5.773" />
  <path d="M20.978 11.372c.21 2.993 -5.034 2.413 -6.913 1.486c1.392 -1.6 .402 -4.038 -2.274 -3.851c-1.745 .122 -2.927 1.157 -2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79" />
  <path d="M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688" />
  <path d="M12.628 20.978c-2.993 .21 -5.162 -4.725 -3.567 -9.748" />
</svg>
));
BrandEdge.displayName = 'BrandEdge';
all['brand-edge'] = BrandEdge;

export const BrandFacebook = enhancerIcon('brand-facebook', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>
));
BrandFacebook.displayName = 'BrandFacebook';
all['brand-facebook'] = BrandFacebook;

export const BrandFigma = enhancerIcon('brand-figma', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="15" cy="12" r="3" />
  <rect x="6" y="3" width="12" height="6" rx="3" />
  <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
</svg>
));
BrandFigma.displayName = 'BrandFigma';
all['brand-figma'] = BrandFigma;

export const BrandFirefox = enhancerIcon('brand-firefox', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4.028 7.82a9 9 0 1 0 12.823 -3.4c-1.636 -1.02 -3.064 -1.02 -4.851 -1.02h-1.647" />
  <path d="M4.914 9.485c-1.756 -1.569 -.805 -5.38 .109 -6.17c.086 .896 .585 1.208 1.111 1.685c.88 -.275 1.313 -.282 1.867 0c.82 -.91 1.694 -2.354 2.628 -2.093c-1.082 1.741 -.07 3.733 1.371 4.173c-.17 .975 -1.484 1.913 -2.76 2.686c-1.296 .938 -.722 1.85 0 2.234c.949 .506 3.611 -.995 4.545 .354c-1.698 .102 -1.536 3.107 -3.983 2.727c2.523 .957 4.345 .462 5.458 -.34c1.965 -1.52 2.879 -3.542 2.879 -5.557c-.014 -1.398 .194 -2.695 -1.26 -4.75" />
</svg>
));
BrandFirefox.displayName = 'BrandFirefox';
all['brand-firefox'] = BrandFirefox;

export const BrandFlickr = enhancerIcon('brand-flickr', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="12" r="3" />
  <circle cx="17" cy="12" r="3" />
</svg>
));
BrandFlickr.displayName = 'BrandFlickr';
all['brand-flickr'] = BrandFlickr;

export const BrandFoursquare = enhancerIcon('brand-foursquare', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 3h10c.644 0 1.11 .696 .978 1.33l-1.984 9.859a1.014 1.014 0 0 1 -.994 .811h-2.254c-.308 0 -.6 .141 -.793 .382l-4.144 5.25c-.599 .752 -1.809 .331 -1.809 -.632v-16c0 -.564 .44 -1 1 -1z" />
  <line x1="12" y1="9" x2="17" y2="9" />
</svg>
));
BrandFoursquare.displayName = 'BrandFoursquare';
all['brand-foursquare'] = BrandFoursquare;

export const BrandFramer = enhancerIcon('brand-framer', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
</svg>
));
BrandFramer.displayName = 'BrandFramer';
all['brand-framer'] = BrandFramer;

export const BrandGithub = enhancerIcon('brand-github', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
</svg>
));
BrandGithub.displayName = 'BrandGithub';
all['brand-github'] = BrandGithub;

export const BrandGitlab = enhancerIcon('brand-gitlab', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" />
</svg>
));
BrandGitlab.displayName = 'BrandGitlab';
all['brand-gitlab'] = BrandGitlab;

export const BrandGoogleAnalytics = enhancerIcon('brand-google-analytics', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="10" y="9" width="4" height="12" rx="1.105" />
  <rect x="17" y="3" width="4" height="18" rx="1.105" />
  <circle cx="5" cy="19" r="2" />
</svg>
));
BrandGoogleAnalytics.displayName = 'BrandGoogleAnalytics';
all['brand-google-analytics'] = BrandGoogleAnalytics;

export const BrandGoogleDrive = enhancerIcon('brand-google-drive', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 10l-6 10l-3 -5l6 -10z" />
  <path d="M9 15h12l-3 5h-12" />
  <path d="M15 15l-6 -10h6l6 10z" />
</svg>
));
BrandGoogleDrive.displayName = 'BrandGoogleDrive';
all['brand-google-drive'] = BrandGoogleDrive;

export const BrandGooglePlay = enhancerIcon('brand-google-play', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 3.71v16.58a0.7 .7 0 0 0 1.05 .606l14.622 -8.42a0.55 .55 0 0 0 0 -.953l-14.622 -8.419a0.7 .7 0 0 0 -1.05 .607z" />
  <line x1="15" y1="9" x2="4.5" y2="20.5" />
  <line x1="4.5" y1="3.5" x2="15" y2="15" />
</svg>
));
BrandGooglePlay.displayName = 'BrandGooglePlay';
all['brand-google-play'] = BrandGooglePlay;

export const BrandGoogle = enhancerIcon('brand-google', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
</svg>
));
BrandGoogle.displayName = 'BrandGoogle';
all['brand-google'] = BrandGoogle;

export const BrandGravatar = enhancerIcon('brand-gravatar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5.64 5.632a9 9 0 1 0 6.36 -2.632v7.714" />
</svg>
));
BrandGravatar.displayName = 'BrandGravatar';
all['brand-gravatar'] = BrandGravatar;

export const BrandHipchat = enhancerIcon('brand-hipchat', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17.802 17.292s.077 -.055 .2 -.149c1.843 -1.425 2.998 -3.49 2.998 -5.789c0 -4.286 -4.03 -7.764 -8.998 -7.764c-4.97 0 -9.002 3.478 -9.002 7.764c0 4.288 4.03 7.646 9 7.646c.424 0 1.12 -.028 2.088 -.084c1.262 .82 3.104 1.493 4.716 1.493c.499 0 .734 -.41 .414 -.828c-.486 -.596 -1.156 -1.551 -1.416 -2.29z" />
  <path d="M7.5 13.5c2.5 2.5 6.5 2.5 9 0" />
</svg>
));
BrandHipchat.displayName = 'BrandHipchat';
all['brand-hipchat'] = BrandHipchat;

export const BrandHtml5 = enhancerIcon('brand-html5', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
  <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
</svg>
));
BrandHtml5.displayName = 'BrandHtml5';
all['brand-html5'] = BrandHtml5;

export const BrandInstagram = enhancerIcon('brand-instagram', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="4" />
  <circle cx="12" cy="12" r="3" />
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
</svg>
));
BrandInstagram.displayName = 'BrandInstagram';
all['brand-instagram'] = BrandInstagram;

export const BrandKickstarter = enhancerIcon('brand-kickstarter', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 9l2.975 -4.65c.615 -.9 1.405 -1.35 2.377 -1.35c.79 0 1.474 .286 2.054 .858c.576 .574 .866 1.256 .866 2.054c0 .588 -.153 1.109 -.46 1.559l-2.812 4.029l3.465 4.912c.356 .46 .535 .998 .535 1.613a2.92 2.92 0 0 1 -.843 2.098c-.561 .584 -1.242 .877 -2.04 .877c-.876 0 -1.545 -.29 -2.005 -.87l-4.112 -5.697v3.067c0 .876 -.313 1.69 -.611 2.175c-.543 .883 -1.35 1.325 -2.389 1.325c-.944 0 -1.753 -.327 -2.271 -.974c-.486 -.6 -.729 -1.392 -.729 -2.38v-11.371c0 -.934 .247 -1.706 .74 -2.313c.512 -.641 1.347 -.962 2.26 -.962c.868 0 1.821 .321 2.4 .962c.323 .356 .515 .714 .6 1.08c.052 .224 0 .643 0 1.26v2.698z" />
</svg>
));
BrandKickstarter.displayName = 'BrandKickstarter';
all['brand-kickstarter'] = BrandKickstarter;

export const BrandKotlin = enhancerIcon('brand-kotlin', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 20h-16v-16h16" />
  <line x1="4" y1="20" x2="20" y2="4" />
  <path d="M4 12l8 -8" />
  <line x1="12" y1="12" x2="20" y2="20" />
</svg>
));
BrandKotlin.displayName = 'BrandKotlin';
all['brand-kotlin'] = BrandKotlin;

export const BrandLinkedin = enhancerIcon('brand-linkedin', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="8" y1="11" x2="8" y2="16" />
  <line x1="8" y1="8" x2="8" y2="8.01" />
  <line x1="12" y1="16" x2="12" y2="11" />
  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg>
));
BrandLinkedin.displayName = 'BrandLinkedin';
all['brand-linkedin'] = BrandLinkedin;

export const BrandMedium = enhancerIcon('brand-medium', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M8 9h1l3 3l3 -3h1" />
  <line x1="8" y1="15" x2="10" y2="15" />
  <line x1="14" y1="15" x2="16" y2="15" />
  <line x1="9" y1="9" x2="9" y2="15" />
  <line x1="15" y1="9" x2="15" y2="15" />
</svg>
));
BrandMedium.displayName = 'BrandMedium';
all['brand-medium'] = BrandMedium;

export const BrandMessenger = enhancerIcon('brand-messenger', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
  <path d="M8 13l3 -2l2 2l3 -2" />
</svg>
));
BrandMessenger.displayName = 'BrandMessenger';
all['brand-messenger'] = BrandMessenger;

export const BrandNetflix = enhancerIcon('brand-netflix', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 20v-16l7 16v-16" />
</svg>
));
BrandNetflix.displayName = 'BrandNetflix';
all['brand-netflix'] = BrandNetflix;

export const BrandOpenSource = enhancerIcon('brand-open-source', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3a9 9 0 0 1 3.618 17.243l-2.193 -5.602a3 3 0 1 0 -2.849 0l-2.193 5.603a9 9 0 0 1 3.617 -17.244z" />
</svg>
));
BrandOpenSource.displayName = 'BrandOpenSource';
all['brand-open-source'] = BrandOpenSource;

export const BrandOpera = enhancerIcon('brand-opera', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <ellipse cx="12" cy="12" rx="3" ry="5" />
</svg>
));
BrandOpera.displayName = 'BrandOpera';
all['brand-opera'] = BrandOpera;

export const BrandPagekit = enhancerIcon('brand-pagekit', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12.077 20h-5.077v-16h11v14h-5.077" />
</svg>
));
BrandPagekit.displayName = 'BrandPagekit';
all['brand-pagekit'] = BrandPagekit;

export const BrandPatreon = enhancerIcon('brand-patreon', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 3h3v18h-3z" />
  <circle cx="15" cy="9.5" r="6.5" />
</svg>
));
BrandPatreon.displayName = 'BrandPatreon';
all['brand-patreon'] = BrandPatreon;

export const BrandPaypal = enhancerIcon('brand-paypal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a0.5 .5 0 0 1 -.5 -.6l.2 -1.4" />
</svg>
));
BrandPaypal.displayName = 'BrandPaypal';
all['brand-paypal'] = BrandPaypal;

export const BrandPinterest = enhancerIcon('brand-pinterest', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="8" y1="20" x2="12" y2="11" />
  <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
BrandPinterest.displayName = 'BrandPinterest';
all['brand-pinterest'] = BrandPinterest;

export const BrandPocket = enhancerIcon('brand-pocket', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h14a2 2 0 0 1 2 2v6a9 9 0 0 1 -18 0v-6a2 2 0 0 1 2 -2" />
  <polyline points="8 11 12 15 16 11" />
</svg>
));
BrandPocket.displayName = 'BrandPocket';
all['brand-pocket'] = BrandPocket;

export const BrandProducthunt = enhancerIcon('brand-producthunt', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
BrandProducthunt.displayName = 'BrandProducthunt';
all['brand-producthunt'] = BrandProducthunt;

export const BrandPython = enhancerIcon('brand-python', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
  <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
  <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
  <line x1="11" y1="6" x2="11" y2="6.01" />
  <line x1="13" y1="18" x2="13" y2="18.01" />
</svg>
));
BrandPython.displayName = 'BrandPython';
all['brand-python'] = BrandPython;

export const BrandReddit = enhancerIcon('brand-reddit', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
  <path d="M12 8l1 -5l6 1" />
  <circle cx="19" cy="4" r="1" />
  <circle cx="9" cy="13" r=".5" fill="currentColor" />
  <circle cx="15" cy="13" r=".5" fill="currentColor" />
  <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
</svg>
));
BrandReddit.displayName = 'BrandReddit';
all['brand-reddit'] = BrandReddit;

export const BrandSafari = enhancerIcon('brand-safari', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="8 16 10 10 16 8 14 14 8 16" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
BrandSafari.displayName = 'BrandSafari';
all['brand-safari'] = BrandSafari;

export const BrandSass = enhancerIcon('brand-sass', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M12 10.523c2.46 -.826 4.002 -.826 4.002 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193" />
</svg>
));
BrandSass.displayName = 'BrandSass';
all['brand-sass'] = BrandSass;

export const BrandSentry = enhancerIcon('brand-sentry', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 18a1.93 1.93 0 0 0 .306 1.076a2 2 0 0 0 1.584 .924c.646 .033 -.537 0 .11 0h3a4.992 4.992 0 0 0 -3.66 -4.81c.558 -.973 1.24 -2.149 2.04 -3.531a8.997 8.997 0 0 1 5.62 8.341h4c.663 0 2.337 .005 3 0a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-1.84 3.176c4.482 2.05 7.6 6.571 7.6 11.824" />
</svg>
));
BrandSentry.displayName = 'BrandSentry';
all['brand-sentry'] = BrandSentry;

export const BrandShazam = enhancerIcon('brand-shazam', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 12l2 -2a2.828 2.828 0 0 1 4 0a2.828 2.828 0 0 1 0 4l-3 3" />
  <path d="M14 12l-2 2a2.828 2.828 0 1 1 -4 -4l3 -3" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
BrandShazam.displayName = 'BrandShazam';
all['brand-shazam'] = BrandShazam;

export const BrandSketch = enhancerIcon('brand-sketch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3.262 10.878l8 8.789c.4 .44 1.091 .44 1.491 0l8 -8.79c.313 -.344 .349 -.859 .087 -1.243l-3.537 -5.194a1 1 0 0 0 -.823 -.436h-8.926a1 1 0 0 0 -.823 .436l-3.54 5.192c-.263 .385 -.227 .901 .087 1.246z" />
</svg>
));
BrandSketch.displayName = 'BrandSketch';
all['brand-sketch'] = BrandSketch;

export const BrandSkype = enhancerIcon('brand-skype', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1 -5.953 5.953a9 9 0 0 1 -11.253 -11.253a4.5 4.5 0 0 1 5.953 -5.954a8.987 8.987 0 0 1 2.65 -.396z" />
  <path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4 -1.187 4 -2.5c0 -1.503 -1.927 -2.5 -4 -2.5s-4 -.997 -4 -2.5c0 -1.313 1.095 -2.5 4 -2.5c1.642 0 3.5 .5 4 2.5" />
</svg>
));
BrandSkype.displayName = 'BrandSkype';
all['brand-skype'] = BrandSkype;

export const BrandSlack = enhancerIcon('brand-slack', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6" />
  <path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6" />
  <path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6" />
  <path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6" />
</svg>
));
BrandSlack.displayName = 'BrandSlack';
all['brand-slack'] = BrandSlack;

export const BrandSnapchat = enhancerIcon('brand-snapchat', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118zm-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118" />
</svg>
));
BrandSnapchat.displayName = 'BrandSnapchat';
all['brand-snapchat'] = BrandSnapchat;

export const BrandSoundcloud = enhancerIcon('brand-soundcloud', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z" />
  <line x1="9" y1="8" x2="9" y2="17" />
  <line x1="6" y1="17" x2="6" y2="10" />
  <line x1="3" y1="16" x2="3" y2="14" />
</svg>
));
BrandSoundcloud.displayName = 'BrandSoundcloud';
all['brand-soundcloud'] = BrandSoundcloud;

export const BrandSpotify = enhancerIcon('brand-spotify', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
  <path d="M9 15c1.5 -1 4 -1 5 .5" />
  <path d="M7 9c2 -1 6 -2 10 .5" />
</svg>
));
BrandSpotify.displayName = 'BrandSpotify';
all['brand-spotify'] = BrandSpotify;

export const BrandSteam = enhancerIcon('brand-steam', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 2.995l-.176 .005a3.001 3.001 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z" />
  <circle fill="currentColor" cx="16.5" cy="9.5" r="1" />
</svg>
));
BrandSteam.displayName = 'BrandSteam';
all['brand-steam'] = BrandSteam;

export const BrandStripe = enhancerIcon('brand-stripe', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11.453 8.056c0 -.623 .518 -.979 1.442 -.979c1.69 0 3.41 .343 4.605 .923l.5 -4c-.948 -.449 -2.82 -1 -5.5 -1c-1.895 0 -3.373 .087 -4.5 1c-1.172 .956 -2 2.33 -2 4c0 3.03 1.958 4.906 5 6c1.961 .69 3 .743 3 1.5c0 .735 -.851 1.5 -2 1.5c-1.423 0 -3.963 -.609 -5.5 -1.5l-.5 4c1.321 .734 3.474 1.5 6 1.5c2.004 0 3.957 -.468 5.084 -1.36c1.263 -.979 1.916 -2.268 1.916 -4.14c0 -3.096 -1.915 -4.547 -5.003 -5.637c-1.646 -.605 -2.544 -1.07 -2.544 -1.807z" />
</svg>
));
BrandStripe.displayName = 'BrandStripe';
all['brand-stripe'] = BrandStripe;

export const BrandTabler = enhancerIcon('brand-tabler', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9l3 3l-3 3" />
  <line x1="13" y1="15" x2="16" y2="15" />
  <rect x="4" y="4" width="16" height="16" rx="4" />
</svg>
));
BrandTabler.displayName = 'BrandTabler';
all['brand-tabler'] = BrandTabler;

export const BrandTailwind = enhancerIcon('brand-tailwind', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
</svg>
));
BrandTailwind.displayName = 'BrandTailwind';
all['brand-tailwind'] = BrandTailwind;

export const BrandTelegram = enhancerIcon('brand-telegram', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
</svg>
));
BrandTelegram.displayName = 'BrandTelegram';
all['brand-telegram'] = BrandTelegram;

export const BrandTidal = enhancerIcon('brand-tidal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
  <path d="M12 14l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
  <path d="M19 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
  <path d="M5 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
</svg>
));
BrandTidal.displayName = 'BrandTidal';
all['brand-tidal'] = BrandTidal;

export const BrandTiktok = enhancerIcon('brand-tiktok', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
</svg>
));
BrandTiktok.displayName = 'BrandTiktok';
all['brand-tiktok'] = BrandTiktok;

export const BrandTinder = enhancerIcon('brand-tinder', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18.918 8.174c2.56 4.982 .501 11.656 -5.38 12.626c-7.702 1.687 -12.84 -7.716 -7.054 -13.229c.309 -.305 1.161 -1.095 1.516 -1.349c0 .528 .27 3.475 1 3.167c3 0 4 -4.222 3.587 -7.389c2.7 1.411 4.987 3.376 6.331 6.174z" />
</svg>
));
BrandTinder.displayName = 'BrandTinder';
all['brand-tinder'] = BrandTinder;

export const BrandTumblr = enhancerIcon('brand-tumblr', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 21h4v-4h-4v-6h4v-4h-4v-4h-4v1a3 3 0 0 1 -3 3h-1v4h4v6a4 4 0 0 0 4 4" />
</svg>
));
BrandTumblr.displayName = 'BrandTumblr';
all['brand-tumblr'] = BrandTumblr;

export const BrandTwitch = enhancerIcon('brand-twitch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" />
  <line x1="16" y1="8" x2="16" y2="12" />
  <line x1="12" y1="8" x2="12" y2="12" />
</svg>
));
BrandTwitch.displayName = 'BrandTwitch';
all['brand-twitch'] = BrandTwitch;

export const BrandTwitter = enhancerIcon('brand-twitter', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
</svg>
));
BrandTwitter.displayName = 'BrandTwitter';
all['brand-twitter'] = BrandTwitter;

export const BrandUnsplash = enhancerIcon('brand-unsplash', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 11h5v4h6v-4h5v9h-16zm5 -7h6v4h-6z" />
</svg>
));
BrandUnsplash.displayName = 'BrandUnsplash';
all['brand-unsplash'] = BrandUnsplash;

export const BrandVimeo = enhancerIcon('brand-vimeo', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 8.5l1 1s1.5 -1.102 2 -.5c.509 .609 1.863 7.65 2.5 9c.556 1.184 1.978 2.89 4 1.5c2 -1.5 7.5 -5.5 8.5 -11.5c.444 -2.661 -1 -4 -2.5 -4c-2 0 -4.047 1.202 -4.5 4c2.05 -1.254 2.551 1.003 1.5 3c-1.052 2.005 -2 3 -2.5 3c-.49 0 -.924 -1.165 -1.5 -3.5c-.59 -2.42 -.5 -6.5 -3 -6.5s-5.5 4.5 -5.5 4.5z" />
</svg>
));
BrandVimeo.displayName = 'BrandVimeo';
all['brand-vimeo'] = BrandVimeo;

export const BrandVk = enhancerIcon('brand-vk', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 6h2v12c-4.5 -1 -8 -6.5 -9 -12" />
  <path d="M20 6c-1 2 -3 5 -5 6h-3" />
  <path d="M20 18c-1 -2 -3 -5 -5 -6" />
</svg>
));
BrandVk.displayName = 'BrandVk';
all['brand-vk'] = BrandVk;

export const BrandWhatsapp = enhancerIcon('brand-whatsapp', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
  <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
</svg>
));
BrandWhatsapp.displayName = 'BrandWhatsapp';
all['brand-whatsapp'] = BrandWhatsapp;

export const BrandWindows = enhancerIcon('brand-windows', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z" />
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="4" y1="12" x2="20" y2="12" />
</svg>
));
BrandWindows.displayName = 'BrandWindows';
all['brand-windows'] = BrandWindows;

export const BrandYahoo = enhancerIcon('brand-yahoo', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="6" x2="8" y2="6" />
  <line x1="7" y1="18" x2="14" y2="18" />
  <path d="M4.5 6l5.5 7v5" />
  <path d="M10 13l6 -5" />
  <line x1="12.5" y1="8" x2="17.5" y2="8" />
  <line x1="20" y1="11" x2="20" y2="15" />
  <line x1="20" y1="18" x2="20" y2="18.01" />
</svg>
));
BrandYahoo.displayName = 'BrandYahoo';
all['brand-yahoo'] = BrandYahoo;

export const BrandYcombinator = enhancerIcon('brand-ycombinator', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M8 7.002l4 5.998l4 -6" />
  <line x1="12" y1="17" x2="12" y2="13" />
</svg>
));
BrandYcombinator.displayName = 'BrandYcombinator';
all['brand-ycombinator'] = BrandYcombinator;

export const BrandYoutube = enhancerIcon('brand-youtube', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="4" />
  <path d="M10 9l5 3l-5 3z" />
</svg>
));
BrandYoutube.displayName = 'BrandYoutube';
all['brand-youtube'] = BrandYoutube;

export const Briefcase = enhancerIcon('briefcase', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="7" width="18" height="13" rx="2" />
  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <path d="M3 13a20 20 0 0 0 18 0" />
</svg>
));
Briefcase.displayName = 'Briefcase';
all['briefcase'] = Briefcase;

export const BrightnessDown = enhancerIcon('brightness-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="3" />
  <line x1="12" y1="5" x2="12" y2="5.01" />
  <line x1="17" y1="7" x2="17" y2="7.01" />
  <line x1="19" y1="12" x2="19" y2="12.01" />
  <line x1="17" y1="17" x2="17" y2="17.01" />
  <line x1="12" y1="19" x2="12" y2="19.01" />
  <line x1="7" y1="17" x2="7" y2="17.01" />
  <line x1="5" y1="12" x2="5" y2="12.01" />
  <line x1="7" y1="7" x2="7" y2="7.01" />
</svg>
));
BrightnessDown.displayName = 'BrightnessDown';
all['brightness-down'] = BrightnessDown;

export const BrightnessUp = enhancerIcon('brightness-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="3" />
  <line x1="12" y1="5" x2="12" y2="3" />
  <line x1="17" y1="7" x2="18.4" y2="5.6" />
  <line x1="19" y1="12" x2="21" y2="12" />
  <line x1="17" y1="17" x2="18.4" y2="18.4" />
  <line x1="12" y1="19" x2="12" y2="21" />
  <line x1="7" y1="17" x2="5.6" y2="18.4" />
  <line x1="6" y1="12" x2="4" y2="12" />
  <line x1="7" y1="7" x2="5.6" y2="5.6" />
</svg>
));
BrightnessUp.displayName = 'BrightnessUp';
all['brightness-up'] = BrightnessUp;

export const Brightness = enhancerIcon('brightness', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="3" x2="12" y2="21" />
  <line x1="12" y1="9" x2="16.65" y2="4.35" />
  <line x1="12" y1="14.3" x2="19.37" y2="6.93" />
  <line x1="12" y1="19.6" x2="20.85" y2="10.75" />
</svg>
));
Brightness.displayName = 'Brightness';
all['brightness'] = Brightness;

export const Browser = enhancerIcon('browser', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="1" />
  <line x1="4" y1="8" x2="20" y2="8" />
  <line x1="8" y1="4" x2="8" y2="8" />
</svg>
));
Browser.displayName = 'Browser';
all['browser'] = Browser;

export const Brush = enhancerIcon('brush', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
  <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
  <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
  <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
</svg>
));
Brush.displayName = 'Brush';
all['brush'] = Brush;

export const Bucket = enhancerIcon('bucket', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 9l-2 9a2 2.5 0 0 1 -2 2h-6a2 2.5 0 0 1 -2 -2l-2 -9z" />
  <path d="M7 9a5 5 0 0 1 10 0" />
</svg>
));
Bucket.displayName = 'Bucket';
all['bucket'] = Bucket;

export const Bug = enhancerIcon('bug', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 9v-1a3 3 0 0 1 6 0v1" />
  <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
  <line x1="3" y1="13" x2="7" y2="13" />
  <line x1="17" y1="13" x2="21" y2="13" />
  <line x1="12" y1="20" x2="12" y2="14" />
  <line x1="4" y1="19" x2="7.35" y2="17" />
  <line x1="20" y1="19" x2="16.65" y2="17" />
  <line x1="4" y1="7" x2="7.75" y2="9.4" />
  <line x1="20" y1="7" x2="16.25" y2="9.4" />
</svg>
));
Bug.displayName = 'Bug';
all['bug'] = Bug;

export const BuildingArch = enhancerIcon('building-arch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="21" x2="21" y2="21" />
  <path d="M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15" />
  <path d="M9 21v-8a3 3 0 0 1 6 0v8" />
</svg>
));
BuildingArch.displayName = 'BuildingArch';
all['building-arch'] = BuildingArch;

export const BuildingBank = enhancerIcon('building-bank', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="21" x2="21" y2="21" />
  <line x1="3" y1="10" x2="21" y2="10" />
  <polyline points="5 6 12 3 19 6" />
  <line x1="4" y1="10" x2="4" y2="21" />
  <line x1="20" y1="10" x2="20" y2="21" />
  <line x1="8" y1="14" x2="8" y2="17" />
  <line x1="12" y1="14" x2="12" y2="17" />
  <line x1="16" y1="14" x2="16" y2="17" />
</svg>
));
BuildingBank.displayName = 'BuildingBank';
all['building-bank'] = BuildingBank;

export const BuildingBridge2 = enhancerIcon('building-bridge-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 7h12a2 2 0 0 1 2 2v9a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a4 4 0 0 0 -8 0v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2" />
</svg>
));
BuildingBridge2.displayName = 'BuildingBridge2';
all['building-bridge-2'] = BuildingBridge2;

export const BuildingBridge = enhancerIcon('building-bridge', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="5" x2="6" y2="19" />
  <line x1="18" y1="5" x2="18" y2="19" />
  <line x1="2" y1="15" x2="22" y2="15" />
  <path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2" />
  <line x1="12" y1="10" x2="12" y2="15" />
</svg>
));
BuildingBridge.displayName = 'BuildingBridge';
all['building-bridge'] = BuildingBridge;

export const BuildingCarousel = enhancerIcon('building-carousel', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="6" />
  <circle cx="5" cy="8" r="2" />
  <circle cx="12" cy="4" r="2" />
  <circle cx="19" cy="8" r="2" />
  <circle cx="5" cy="16" r="2" />
  <circle cx="19" cy="16" r="2" />
  <path d="M8 22l4 -10l4 10" />
</svg>
));
BuildingCarousel.displayName = 'BuildingCarousel';
all['building-carousel'] = BuildingCarousel;

export const BuildingCastle = enhancerIcon('building-castle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 19v-2a3 3 0 0 0 -6 0v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14h4v3h3v-3h4v3h3v-3h4v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
  <line x1="3" y1="11" x2="21" y2="11" />
</svg>
));
BuildingCastle.displayName = 'BuildingCastle';
all['building-castle'] = BuildingCastle;

export const BuildingChurch = enhancerIcon('building-church', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="21" x2="21" y2="21" />
  <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
  <line x1="10" y1="5" x2="14" y2="5" />
  <line x1="12" y1="3" x2="12" y2="8" />
  <path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
</svg>
));
BuildingChurch.displayName = 'BuildingChurch';
all['building-church'] = BuildingChurch;

export const BuildingCommunity = enhancerIcon('building-community', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
  <line x1="13" y1="7" x2="13" y2="7.01" />
  <line x1="17" y1="7" x2="17" y2="7.01" />
  <line x1="17" y1="11" x2="17" y2="11.01" />
  <line x1="17" y1="15" x2="17" y2="15.01" />
</svg>
));
BuildingCommunity.displayName = 'BuildingCommunity';
all['building-community'] = BuildingCommunity;

export const BuildingFortress = enhancerIcon('building-fortress', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 21h1a1 1 0 0 0 1 -1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2" />
  <path d="M7 7h0v.01" />
  <path d="M7 10h0v.01" />
  <path d="M7 13h0v.01" />
  <path d="M17 7h0v.01" />
  <path d="M17 10h0v.01" />
  <path d="M17 13h0v.01" />
</svg>
));
BuildingFortress.displayName = 'BuildingFortress';
all['building-fortress'] = BuildingFortress;

export const BuildingHospital = enhancerIcon('building-hospital', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="21" x2="21" y2="21" />
  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
  <line x1="10" y1="9" x2="14" y2="9" />
  <line x1="12" y1="7" x2="12" y2="11" />
</svg>
));
BuildingHospital.displayName = 'BuildingHospital';
all['building-hospital'] = BuildingHospital;

export const BuildingLighthouse = enhancerIcon('building-lighthouse', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3l2 3l2 15h-8l2 -15z" />
  <line x1="8" y1="9" x2="16" y2="9" />
  <path d="M3 11l2 -2l-2 -2" />
  <path d="M21 11l-2 -2l2 -2" />
</svg>
));
BuildingLighthouse.displayName = 'BuildingLighthouse';
all['building-lighthouse'] = BuildingLighthouse;

export const BuildingMonument = enhancerIcon('building-monument', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 18l2 -13l2 -2l2 2l2 13" />
  <path d="M5 21v-3h14v3" />
  <line x1="3" y1="21" x2="21" y2="21" />
</svg>
));
BuildingMonument.displayName = 'BuildingMonument';
all['building-monument'] = BuildingMonument;

export const BuildingPavilon = enhancerIcon('building-pavilon', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" />
  <line x1="6" y1="21" x2="6" y2="12" />
  <line x1="18" y1="21" x2="18" y2="12" />
  <path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" />
</svg>
));
BuildingPavilon.displayName = 'BuildingPavilon';
all['building-pavilon'] = BuildingPavilon;

export const BuildingSkyscraper = enhancerIcon('building-skyscraper', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="21" x2="21" y2="21" />
  <path d="M5 21v-14l8 -4v18" />
  <path d="M19 21v-10l-6 -4" />
  <line x1="9" y1="9" x2="9" y2="9.01" />
  <line x1="9" y1="12" x2="9" y2="12.01" />
  <line x1="9" y1="15" x2="9" y2="15.01" />
  <line x1="9" y1="18" x2="9" y2="18.01" />
</svg>
));
BuildingSkyscraper.displayName = 'BuildingSkyscraper';
all['building-skyscraper'] = BuildingSkyscraper;

export const BuildingStore = enhancerIcon('building-store', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="21" x2="21" y2="21" />
  <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
  <line x1="5" y1="21" x2="5" y2="10.85" />
  <line x1="19" y1="21" x2="19" y2="10.85" />
  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
</svg>
));
BuildingStore.displayName = 'BuildingStore';
all['building-store'] = BuildingStore;

export const BuildingWarehouse = enhancerIcon('building-warehouse', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 21v-13l9 -4l9 4v13" />
  <path d="M13 13h4v8h-10v-6h6" />
  <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
</svg>
));
BuildingWarehouse.displayName = 'BuildingWarehouse';
all['building-warehouse'] = BuildingWarehouse;

export const Building = enhancerIcon('building', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="21" x2="21" y2="21" />
  <line x1="9" y1="8" x2="10" y2="8" />
  <line x1="9" y1="12" x2="10" y2="12" />
  <line x1="9" y1="16" x2="10" y2="16" />
  <line x1="14" y1="8" x2="15" y2="8" />
  <line x1="14" y1="12" x2="15" y2="12" />
  <line x1="14" y1="16" x2="15" y2="16" />
  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
</svg>
));
Building.displayName = 'Building';
all['building'] = Building;

export const BulbOff = enhancerIcon('bulb-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
  <line x1="9.7" y1="17" x2="14.3" y2="17" />
</svg>
));
BulbOff.displayName = 'BulbOff';
all['bulb-off'] = BulbOff;

export const Bulb = enhancerIcon('bulb', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
  <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
  <line x1="9.7" y1="17" x2="14.3" y2="17" />
</svg>
));
Bulb.displayName = 'Bulb';
all['bulb'] = Bulb;

export const Buldozer = enhancerIcon('buldozer', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="4" cy="17" r="2" />
  <circle cx="13" cy="17" r="2" />
  <path d="M18 13v6h3" />
  <line x1="13" y1="19" x2="4" y2="19" />
  <line x1="4" y1="15" x2="13" y2="15" />
  <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
  <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
  <line x1="18" y1="17" x2="15" y2="17" />
</svg>
));
Buldozer.displayName = 'Buldozer';
all['buldozer'] = Buldozer;

export const Bus = enhancerIcon('bus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="17" r="2" />
  <circle cx="18" cy="17" r="2" />
  <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
  <polyline points="16 5 17.5 12 22 12" />
  <line x1="2" y1="10" x2="17" y2="10" />
  <line x1="7" y1="5" x2="7" y2="10" />
  <line x1="12" y1="5" x2="12" y2="10" />
</svg>
));
Bus.displayName = 'Bus';
all['bus'] = Bus;

export const Calculator = enhancerIcon('calculator', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="3" width="16" height="18" rx="2" />
  <rect x="8" y="7" width="8" height="3" rx="1" />
  <line x1="8" y1="14" x2="8" y2="14.01" />
  <line x1="12" y1="14" x2="12" y2="14.01" />
  <line x1="16" y1="14" x2="16" y2="14.01" />
  <line x1="8" y1="17" x2="8" y2="17.01" />
  <line x1="12" y1="17" x2="12" y2="17.01" />
  <line x1="16" y1="17" x2="16" y2="17.01" />
</svg>
));
Calculator.displayName = 'Calculator';
all['calculator'] = Calculator;

export const CalendarEvent = enhancerIcon('calendar-event', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="5" width="16" height="16" rx="2" />
  <line x1="16" y1="3" x2="16" y2="7" />
  <line x1="8" y1="3" x2="8" y2="7" />
  <line x1="4" y1="11" x2="20" y2="11" />
  <rect x="8" y="15" width="2" height="2" />
</svg>
));
CalendarEvent.displayName = 'CalendarEvent';
all['calendar-event'] = CalendarEvent;

export const CalendarMinus = enhancerIcon('calendar-minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="5" width="16" height="16" rx="2" />
  <line x1="16" y1="3" x2="16" y2="7" />
  <line x1="8" y1="3" x2="8" y2="7" />
  <line x1="4" y1="11" x2="20" y2="11" />
  <line x1="10" y1="16" x2="14" y2="16" />
</svg>
));
CalendarMinus.displayName = 'CalendarMinus';
all['calendar-minus'] = CalendarMinus;

export const CalendarPlus = enhancerIcon('calendar-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="5" width="16" height="16" rx="2" />
  <line x1="16" y1="3" x2="16" y2="7" />
  <line x1="8" y1="3" x2="8" y2="7" />
  <line x1="4" y1="11" x2="20" y2="11" />
  <line x1="10" y1="16" x2="14" y2="16" />
  <line x1="12" y1="14" x2="12" y2="18" />
</svg>
));
CalendarPlus.displayName = 'CalendarPlus';
all['calendar-plus'] = CalendarPlus;

export const Calendar = enhancerIcon('calendar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="5" width="16" height="16" rx="2" />
  <line x1="16" y1="3" x2="16" y2="7" />
  <line x1="8" y1="3" x2="8" y2="7" />
  <line x1="4" y1="11" x2="20" y2="11" />
  <line x1="11" y1="15" x2="12" y2="15" />
  <line x1="12" y1="15" x2="12" y2="18" />
</svg>
));
Calendar.displayName = 'Calendar';
all['calendar'] = Calendar;

export const CameraMinus = enhancerIcon('camera-minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="13" r="3" />
  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h3m9 6v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
  <line x1="15" y1="6" x2="21" y2="6" />
</svg>
));
CameraMinus.displayName = 'CameraMinus';
all['camera-minus'] = CameraMinus;

export const CameraOff = enhancerIcon('camera-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8.29 4.296a1 1 0 0 1 .71 -.296h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v8m-1.179 2.824c-.25 .113 -.528 .176 -.821 .176h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1c.292 0 .568 -.062 .818 -.175" />
  <path d="M10.436 10.44a3 3 0 1 0 4.126 4.122" />
  <line x1="3" y1="3" x2="21" y2="21" />
</svg>
));
CameraOff.displayName = 'CameraOff';
all['camera-off'] = CameraOff;

export const CameraPlus = enhancerIcon('camera-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="13" r="3" />
  <path d="M5 7h2a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h2m9 7v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
  <line x1="15" y1="6" x2="21" y2="6" />
  <line x1="18" y1="3" x2="18" y2="9" />
</svg>
));
CameraPlus.displayName = 'CameraPlus';
all['camera-plus'] = CameraPlus;

export const Camera = enhancerIcon('camera', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
  <circle cx="12" cy="13" r="3" />
</svg>
));
Camera.displayName = 'Camera';
all['camera'] = Camera;

export const Capture = enhancerIcon('capture', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <circle cx="12" cy="12" r="3" />
</svg>
));
Capture.displayName = 'Capture';
all['capture'] = Capture;

export const Car = enhancerIcon('car', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="17" r="2" />
  <circle cx="17" cy="17" r="2" />
  <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
</svg>
));
Car.displayName = 'Car';
all['car'] = Car;

export const Caravan = enhancerIcon('caravan', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="11" cy="17" r="2" />
  <line x1="21" y1="17" x2="13" y2="17" />
  <path d="M9 17h-5a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2h10l4 4v8" />
  <rect x="6" y="8" width="6" height="4" rx="1" />
</svg>
));
Caravan.displayName = 'Caravan';
all['caravan'] = Caravan;

export const Cardboards = enhancerIcon('cardboards', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 7v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z" />
  <circle cx="8" cy="11" r="1" />
  <circle cx="16" cy="11" r="1" />
</svg>
));
Cardboards.displayName = 'Cardboards';
all['cardboards'] = Cardboards;

export const CaretDown = enhancerIcon('caret-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
</svg>
));
CaretDown.displayName = 'CaretDown';
all['caret-down'] = CaretDown;

export const CaretLeft = enhancerIcon('caret-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l-6 -6l-6 6h12" transform="rotate(270 12 12)" />
</svg>
));
CaretLeft.displayName = 'CaretLeft';
all['caret-left'] = CaretLeft;

export const CaretRight = enhancerIcon('caret-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
</svg>
));
CaretRight.displayName = 'CaretRight';
all['caret-right'] = CaretRight;

export const CaretUp = enhancerIcon('caret-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 15l-6 -6l-6 6h12" />
</svg>
));
CaretUp.displayName = 'CaretUp';
all['caret-up'] = CaretUp;

export const Cash = enhancerIcon('cash', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="7" y="9" width="14" height="10" rx="2" />
  <circle cx="14" cy="14" r="2" />
  <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
</svg>
));
Cash.displayName = 'Cash';
all['cash'] = Cash;

export const Cast = enhancerIcon('cast', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="19" x2="3.01" y2="19" />
  <path d="M7 19a4 4 0 0 0 -4 -4" />
  <path d="M11 19a8 8 0 0 0 -8 -8" />
  <path d="M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2" />
</svg>
));
Cast.displayName = 'Cast';
all['cast'] = Cast;

export const Ce = enhancerIcon('ce', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 4a8 8 0 1 0 0 16" />
  <path d="M20 4a8 8 0 1 0 0 16" />
  <line x1="12" y1="12" x2="20" y2="12" />
</svg>
));
Ce.displayName = 'Ce';
all['ce'] = Ce;

export const Certificate = enhancerIcon('certificate', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="15" cy="15" r="3" />
  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
  <line x1="6" y1="9" x2="18" y2="9" />
  <line x1="6" y1="12" x2="9" y2="12" />
  <line x1="6" y1="15" x2="8" y2="15" />
</svg>
));
Certificate.displayName = 'Certificate';
all['certificate'] = Certificate;

export const ChartAreaLine = enhancerIcon('chart-area-line', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" />
  <polyline points="4 12 7 8 11 10 16 4 20 8" />
</svg>
));
ChartAreaLine.displayName = 'ChartAreaLine';
all['chart-area-line'] = ChartAreaLine;

export const ChartArea = enhancerIcon('chart-area', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="19" x2="20" y2="19" />
  <polyline points="4 15 8 9 12 11 16 6 20 10 20 15 4 15" />
</svg>
));
ChartArea.displayName = 'ChartArea';
all['chart-area'] = ChartArea;

export const ChartBar = enhancerIcon('chart-bar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="12" width="6" height="8" rx="1" />
  <rect x="9" y="8" width="6" height="12" rx="1" />
  <rect x="15" y="4" width="6" height="16" rx="1" />
  <line x1="4" y1="20" x2="18" y2="20" />
</svg>
));
ChartBar.displayName = 'ChartBar';
all['chart-bar'] = ChartBar;

export const ChartBubble = enhancerIcon('chart-bubble', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="16" r="3" />
  <circle cx="16" cy="19" r="2" />
  <circle cx="14.5" cy="7.5" r="4.5" />
</svg>
));
ChartBubble.displayName = 'ChartBubble';
all['chart-bubble'] = ChartBubble;

export const ChartCandle = enhancerIcon('chart-candle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="6" width="4" height="5" rx="1" />
  <line x1="6" y1="4" x2="6" y2="6" />
  <line x1="6" y1="11" x2="6" y2="20" />
  <rect x="10" y="14" width="4" height="5" rx="1" />
  <line x1="12" y1="4" x2="12" y2="14" />
  <line x1="12" y1="19" x2="12" y2="20" />
  <rect x="16" y="5" width="4" height="6" rx="1" />
  <line x1="18" y1="4" x2="18" y2="5" />
  <line x1="18" y1="11" x2="18" y2="20" />
</svg>
));
ChartCandle.displayName = 'ChartCandle';
all['chart-candle'] = ChartCandle;

export const ChartDonut = enhancerIcon('chart-donut', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-3.8a4.1 4.1 0 1 1 -5 -5v-4a0.9 .9 0 0 0 -1 -.8" />
  <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a9 9 0 0 0 -1 -1v-4.5" />
</svg>
));
ChartDonut.displayName = 'ChartDonut';
all['chart-donut'] = ChartDonut;

export const ChartLine = enhancerIcon('chart-line', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="19" x2="20" y2="19" />
  <polyline points="4 15 8 9 12 11 16 6 20 10" />
</svg>
));
ChartLine.displayName = 'ChartLine';
all['chart-line'] = ChartLine;

export const ChartPie = enhancerIcon('chart-pie', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a0.9 .9 0 0 0 -1 -.8" />
  <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
</svg>
));
ChartPie.displayName = 'ChartPie';
all['chart-pie'] = ChartPie;

export const ChartRadar = enhancerIcon('chart-radar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3l9.5 7l-3.5 11h-12l-3.5 -11z" />
  <path d="M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z" />
  <path d="M2.5 10l9.5 3l9.5 -3" />
  <path d="M12 3v10l6 8" />
  <path d="M6 21l6 -8" />
</svg>
));
ChartRadar.displayName = 'ChartRadar';
all['chart-radar'] = ChartRadar;

export const Check = enhancerIcon('check', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l5 5l10 -10" />
</svg>
));
Check.displayName = 'Check';
all['check'] = Check;

export const Checkbox = enhancerIcon('checkbox', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="9 11 12 14 20 6" />
  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
</svg>
));
Checkbox.displayName = 'Checkbox';
all['checkbox'] = Checkbox;

export const Checks = enhancerIcon('checks', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 12l5 5l10 -10" />
  <path d="M2 12l5 5m5 -5l5 -5" />
</svg>
));
Checks.displayName = 'Checks';
all['checks'] = Checks;

export const ChevronDownLeft = enhancerIcon('chevron-down-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 8v8h8" />
</svg>
));
ChevronDownLeft.displayName = 'ChevronDownLeft';
all['chevron-down-left'] = ChevronDownLeft;

export const ChevronDownRight = enhancerIcon('chevron-down-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 8v8h-8" />
</svg>
));
ChevronDownRight.displayName = 'ChevronDownRight';
all['chevron-down-right'] = ChevronDownRight;

export const ChevronDown = enhancerIcon('chevron-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="6 9 12 15 18 9" />
</svg>
));
ChevronDown.displayName = 'ChevronDown';
all['chevron-down'] = ChevronDown;

export const ChevronLeft = enhancerIcon('chevron-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="15 6 9 12 15 18" />
</svg>
));
ChevronLeft.displayName = 'ChevronLeft';
all['chevron-left'] = ChevronLeft;

export const ChevronRight = enhancerIcon('chevron-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="9 6 15 12 9 18" />
</svg>
));
ChevronRight.displayName = 'ChevronRight';
all['chevron-right'] = ChevronRight;

export const ChevronUpLeft = enhancerIcon('chevron-up-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 16v-8h8" />
</svg>
));
ChevronUpLeft.displayName = 'ChevronUpLeft';
all['chevron-up-left'] = ChevronUpLeft;

export const ChevronUpRight = enhancerIcon('chevron-up-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 8h8v8" />
</svg>
));
ChevronUpRight.displayName = 'ChevronUpRight';
all['chevron-up-right'] = ChevronUpRight;

export const ChevronUp = enhancerIcon('chevron-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="6 15 12 9 18 15" />
</svg>
));
ChevronUp.displayName = 'ChevronUp';
all['chevron-up'] = ChevronUp;

export const ChevronsDownLeft = enhancerIcon('chevrons-down-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 5v8h8" />
  <path d="M7 9v8h8" />
</svg>
));
ChevronsDownLeft.displayName = 'ChevronsDownLeft';
all['chevrons-down-left'] = ChevronsDownLeft;

export const ChevronsDownRight = enhancerIcon('chevrons-down-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 5v8h-8" />
  <path d="M17 9v8h-8" />
</svg>
));
ChevronsDownRight.displayName = 'ChevronsDownRight';
all['chevrons-down-right'] = ChevronsDownRight;

export const ChevronsDown = enhancerIcon('chevrons-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 7 12 12 17 7" />
  <polyline points="7 13 12 18 17 13" />
</svg>
));
ChevronsDown.displayName = 'ChevronsDown';
all['chevrons-down'] = ChevronsDown;

export const ChevronsLeft = enhancerIcon('chevrons-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="11 7 6 12 11 17" />
  <polyline points="17 7 12 12 17 17" />
</svg>
));
ChevronsLeft.displayName = 'ChevronsLeft';
all['chevrons-left'] = ChevronsLeft;

export const ChevronsRight = enhancerIcon('chevrons-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 7 12 12 7 17" />
  <polyline points="13 7 18 12 13 17" />
</svg>
));
ChevronsRight.displayName = 'ChevronsRight';
all['chevrons-right'] = ChevronsRight;

export const ChevronsUpLeft = enhancerIcon('chevrons-up-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 15v-8h8" />
  <path d="M11 19v-8h8" />
</svg>
));
ChevronsUpLeft.displayName = 'ChevronsUpLeft';
all['chevrons-up-left'] = ChevronsUpLeft;

export const ChevronsUpRight = enhancerIcon('chevrons-up-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 7h8v8" />
  <path d="M5 11h8v8" />
</svg>
));
ChevronsUpRight.displayName = 'ChevronsUpRight';
all['chevrons-up-right'] = ChevronsUpRight;

export const ChevronsUp = enhancerIcon('chevrons-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 11 12 6 17 11" />
  <polyline points="7 17 12 12 17 17" />
</svg>
));
ChevronsUp.displayName = 'ChevronsUp';
all['chevrons-up'] = ChevronsUp;

export const ChristmasTree = enhancerIcon('christmas-tree', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z" />
  <path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" />
</svg>
));
ChristmasTree.displayName = 'ChristmasTree';
all['christmas-tree'] = ChristmasTree;

export const CircleCheck = enhancerIcon('circle-check', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M9 12l2 2l4 -4" />
</svg>
));
CircleCheck.displayName = 'CircleCheck';
all['circle-check'] = CircleCheck;

export const CircleDashed = enhancerIcon('circle-dashed', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
  <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
  <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
  <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
  <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
  <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
  <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
  <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
</svg>
));
CircleDashed.displayName = 'CircleDashed';
all['circle-dashed'] = CircleDashed;

export const CircleDotted = enhancerIcon('circle-dotted', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7.5" y1="4.21" x2="7.5" y2="4.22" />
  <line x1="4.21" y1="7.5" x2="4.21" y2="7.51" />
  <line x1="3" y1="12" x2="3" y2="12.01" />
  <line x1="4.21" y1="16.5" x2="4.21" y2="16.51" />
  <line x1="7.5" y1="19.79" x2="7.5" y2="19.8" />
  <line x1="12" y1="21" x2="12" y2="21.01" />
  <line x1="16.5" y1="19.79" x2="16.5" y2="19.8" />
  <line x1="19.79" y1="16.5" x2="19.79" y2="16.51" />
  <line x1="21" y1="12" x2="21" y2="12.01" />
  <line x1="19.79" y1="7.5" x2="19.79" y2="7.51" />
  <line x1="16.5" y1="4.21" x2="16.5" y2="4.22" />
  <line x1="12" y1="3" x2="12" y2="3.01" />
</svg>
));
CircleDotted.displayName = 'CircleDotted';
all['circle-dotted'] = CircleDotted;

export const CircleMinus = enhancerIcon('circle-minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
</svg>
));
CircleMinus.displayName = 'CircleMinus';
all['circle-minus'] = CircleMinus;

export const CirclePlus = enhancerIcon('circle-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="12" x2="15" y2="12" />
  <line x1="12" y1="9" x2="12" y2="15" />
</svg>
));
CirclePlus.displayName = 'CirclePlus';
all['circle-plus'] = CirclePlus;

export const CircleSquare = enhancerIcon('circle-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9.5" cy="9.5" r="6.5" />
  <rect x="10" y="10" width="11" height="11" rx="2" />
</svg>
));
CircleSquare.displayName = 'CircleSquare';
all['circle-square'] = CircleSquare;

export const CircleX = enhancerIcon('circle-x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M10 10l4 4m0 -4l-4 4" />
</svg>
));
CircleX.displayName = 'CircleX';
all['circle-x'] = CircleX;

export const Circle = enhancerIcon('circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
</svg>
));
Circle.displayName = 'Circle';
all['circle'] = Circle;

export const Circles = enhancerIcon('circles', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="7" r="4" />
  <circle cx="6.5" cy="17" r="4" />
  <circle cx="17.5" cy="17" r="4" />
</svg>
));
Circles.displayName = 'Circles';
all['circles'] = Circles;

export const ClearFormatting = enhancerIcon('clear-formatting', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 15l4 4m0 -4l-4 4" />
  <path d="M7 6v-1h11v1" />
  <line x1="7" y1="19" x2="11" y2="19" />
  <line x1="13" y1="5" x2="9" y2="19" />
</svg>
));
ClearFormatting.displayName = 'ClearFormatting';
all['clear-formatting'] = ClearFormatting;

export const Click = enhancerIcon('click', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="12" x2="6" y2="12" />
  <line x1="12" y1="3" x2="12" y2="6" />
  <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
  <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
  <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
  <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
</svg>
));
Click.displayName = 'Click';
all['click'] = Click;

export const ClipboardCheck = enhancerIcon('clipboard-check', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <rect x="9" y="3" width="6" height="4" rx="2" />
  <path d="M9 14l2 2l4 -4" />
</svg>
));
ClipboardCheck.displayName = 'ClipboardCheck';
all['clipboard-check'] = ClipboardCheck;

export const ClipboardList = enhancerIcon('clipboard-list', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <rect x="9" y="3" width="6" height="4" rx="2" />
  <line x1="9" y1="12" x2="9.01" y2="12" />
  <line x1="13" y1="12" x2="15" y2="12" />
  <line x1="9" y1="16" x2="9.01" y2="16" />
  <line x1="13" y1="16" x2="15" y2="16" />
</svg>
));
ClipboardList.displayName = 'ClipboardList';
all['clipboard-list'] = ClipboardList;

export const ClipboardX = enhancerIcon('clipboard-x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <rect x="9" y="3" width="6" height="4" rx="2" />
  <path d="M10 12l4 4m0 -4l-4 4" />
</svg>
));
ClipboardX.displayName = 'ClipboardX';
all['clipboard-x'] = ClipboardX;

export const Clipboard = enhancerIcon('clipboard', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
  <rect x="9" y="3" width="6" height="4" rx="2" />
</svg>
));
Clipboard.displayName = 'Clipboard';
all['clipboard'] = Clipboard;

export const Clock = enhancerIcon('clock', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <polyline points="12 7 12 12 15 15" />
</svg>
));
Clock.displayName = 'Clock';
all['clock'] = Clock;

export const CloudDownload = enhancerIcon('cloud-download', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
  <line x1="12" y1="13" x2="12" y2="22" />
  <polyline points="9 19 12 22 15 19" />
</svg>
));
CloudDownload.displayName = 'CloudDownload';
all['cloud-download'] = CloudDownload;

export const CloudFog = enhancerIcon('cloud-fog', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 16a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
  <line x1="5" y1="20" x2="19" y2="20" />
</svg>
));
CloudFog.displayName = 'CloudFog';
all['cloud-fog'] = CloudFog;

export const CloudOff = enhancerIcon('cloud-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M18 18h-11c-2.598 0 -4.705 -2.015 -4.705 -4.5s2.107 -4.5 4.705 -4.5c.112 -.5 .305 -.973 .568 -1.408m2.094 -1.948c.329 -.174 .68 -.319 1.05 -.43c1.9 -.576 3.997 -.194 5.5 1c1.503 1.192 2.185 3.017 1.788 4.786h1a3.5 3.5 0 0 1 2.212 6.212" />
</svg>
));
CloudOff.displayName = 'CloudOff';
all['cloud-off'] = CloudOff;

export const CloudRain = enhancerIcon('cloud-rain', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
  <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
</svg>
));
CloudRain.displayName = 'CloudRain';
all['cloud-rain'] = CloudRain;

export const CloudSnow = enhancerIcon('cloud-snow', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
  <path d="M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01" />
</svg>
));
CloudSnow.displayName = 'CloudSnow';
all['cloud-snow'] = CloudSnow;

export const CloudStorm = enhancerIcon('cloud-storm', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
  <polyline points="13 14 11 18 14 18 12 22" />
</svg>
));
CloudStorm.displayName = 'CloudStorm';
all['cloud-storm'] = CloudStorm;

export const CloudUpload = enhancerIcon('cloud-upload', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
  <polyline points="9 15 12 12 15 15" />
  <line x1="12" y1="12" x2="12" y2="21" />
</svg>
));
CloudUpload.displayName = 'CloudUpload';
all['cloud-upload'] = CloudUpload;

export const Cloud = enhancerIcon('cloud', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
</svg>
));
Cloud.displayName = 'Cloud';
all['cloud'] = Cloud;

export const Code = enhancerIcon('code', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="7 8 3 12 7 16" />
  <polyline points="17 8 21 12 17 16" />
  <line x1="14" y1="4" x2="10" y2="20" />
</svg>
));
Code.displayName = 'Code';
all['code'] = Code;

export const Coin = enhancerIcon('coin', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
  <path d="M12 6v2m0 8v2" />
</svg>
));
Coin.displayName = 'Coin';
all['coin'] = Coin;

export const ColorPicker = enhancerIcon('color-picker', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="11" y1="7" x2="17" y2="13" />
  <path d="M5 19v-4l9.7 -9.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-9.7 9.7h-4" />
</svg>
));
ColorPicker.displayName = 'ColorPicker';
all['color-picker'] = ColorPicker;

export const ColorSwatch = enhancerIcon('color-swatch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
  <line x1="17" y1="17" x2="17" y2="17.01" />
</svg>
));
ColorSwatch.displayName = 'ColorSwatch';
all['color-swatch'] = ColorSwatch;

export const Columns = enhancerIcon('columns', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="9.5" y2="6" />
  <line x1="4" y1="10" x2="9.5" y2="10" />
  <line x1="4" y1="14" x2="9.5" y2="14" />
  <line x1="4" y1="18" x2="9.5" y2="18" />
  <line x1="14.5" y1="6" x2="20" y2="6" />
  <line x1="14.5" y1="10" x2="20" y2="10" />
  <line x1="14.5" y1="14" x2="20" y2="14" />
  <line x1="14.5" y1="18" x2="20" y2="18" />
</svg>
));
Columns.displayName = 'Columns';
all['columns'] = Columns;

export const Comet = enhancerIcon('comet', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
  <line x1="4" y1="4" x2="11" y2="11" />
  <line x1="9" y1="4" x2="12.5" y2="7.5" />
  <line x1="4" y1="9" x2="7.5" y2="12.5" />
</svg>
));
Comet.displayName = 'Comet';
all['comet'] = Comet;

export const Command = enhancerIcon('command', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
</svg>
));
Command.displayName = 'Command';
all['command'] = Command;

export const Compass = enhancerIcon('compass', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="8 16 10 10 16 8 14 14 8 16" />
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="3" x2="12" y2="5" />
  <line x1="12" y1="19" x2="12" y2="21" />
  <line x1="3" y1="12" x2="5" y2="12" />
  <line x1="19" y1="12" x2="21" y2="12" />
</svg>
));
Compass.displayName = 'Compass';
all['compass'] = Compass;

export const Contrast = enhancerIcon('contrast', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M12 17a5 5 0 0 0 0 -10v10" />
</svg>
));
Contrast.displayName = 'Contrast';
all['contrast'] = Contrast;

export const Copy = enhancerIcon('copy', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="8" y="8" width="12" height="12" rx="2" />
  <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
</svg>
));
Copy.displayName = 'Copy';
all['copy'] = Copy;

export const Copyleft = enhancerIcon('copyleft', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M9.5 9a3.5 4 0 1 1 0 6" />
</svg>
));
Copyleft.displayName = 'Copyleft';
all['copyleft'] = Copyleft;

export const Copyright = enhancerIcon('copyright', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M14.5 9a3.5 4 0 1 0 0 6" />
</svg>
));
Copyright.displayName = 'Copyright';
all['copyright'] = Copyright;

export const CornerDownLeft = enhancerIcon('corner-down-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6v6a3 3 0 0 1 -3 3h-10l4 -4m0 8l-4 -4" />
</svg>
));
CornerDownLeft.displayName = 'CornerDownLeft';
all['corner-down-left'] = CornerDownLeft;

export const CornerDownRight = enhancerIcon('corner-down-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" />
</svg>
));
CornerDownRight.displayName = 'CornerDownRight';
all['corner-down-right'] = CornerDownRight;

export const CornerLeftDown = enhancerIcon('corner-left-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6h-6a3 3 0 0 0 -3 3v10l-4 -4m8 0l-4 4" />
</svg>
));
CornerLeftDown.displayName = 'CornerLeftDown';
all['corner-left-down'] = CornerLeftDown;

export const CornerLeftUp = enhancerIcon('corner-left-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 18h-6a3 3 0 0 1 -3 -3v-10l-4 4m8 0l-4 -4" />
</svg>
));
CornerLeftUp.displayName = 'CornerLeftUp';
all['corner-left-up'] = CornerLeftUp;

export const CornerRightDown = enhancerIcon('corner-right-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4" />
</svg>
));
CornerRightDown.displayName = 'CornerRightDown';
all['corner-right-down'] = CornerRightDown;

export const CornerRightUp = enhancerIcon('corner-right-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 18h6a3 3 0 0 0 3 -3v-10l-4 4m8 0l-4 -4" />
</svg>
));
CornerRightUp.displayName = 'CornerRightUp';
all['corner-right-up'] = CornerRightUp;

export const CornerUpLeft = enhancerIcon('corner-up-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 18v-6a3 3 0 0 0 -3 -3h-10l4 -4m0 8l-4 -4" />
</svg>
));
CornerUpLeft.displayName = 'CornerUpLeft';
all['corner-up-left'] = CornerUpLeft;

export const CornerUpRight = enhancerIcon('corner-up-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 18v-6a3 3 0 0 1 3 -3h10l-4 -4m0 8l4 -4" />
</svg>
));
CornerUpRight.displayName = 'CornerUpRight';
all['corner-up-right'] = CornerUpRight;

export const CreditCardOff = enhancerIcon('credit-card-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="" />
  <path d="M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" />
  <line x1="3" y1="11" x2="11" y2="11" />
  <line x1="15" y1="11" x2="21" y2="11" />
  <line x1="7" y1="15" x2="7.01" y2="15" />
  <line x1="11" y1="15" x2="13" y2="15" />
</svg>
));
CreditCardOff.displayName = 'CreditCardOff';
all['credit-card-off'] = CreditCardOff;

export const CreditCard = enhancerIcon('credit-card', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="3" />
  <line x1="3" y1="10" x2="21" y2="10" />
  <line x1="7" y1="15" x2="7.01" y2="15" />
  <line x1="11" y1="15" x2="13" y2="15" />
</svg>
));
CreditCard.displayName = 'CreditCard';
all['credit-card'] = CreditCard;

export const Crop = enhancerIcon('crop', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 5v10a1 1 0 0 0 1 1h10" />
  <path d="M5 8h10a1 1 0 0 1 1 1v10" />
</svg>
));
Crop.displayName = 'Crop';
all['crop'] = Crop;

export const Crosshair = enhancerIcon('crosshair', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <line x1="9" y1="12" x2="15" y2="12" />
  <line x1="12" y1="9" x2="12" y2="15" />
</svg>
));
Crosshair.displayName = 'Crosshair';
all['crosshair'] = Crosshair;

export const Crown = enhancerIcon('crown', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
</svg>
));
Crown.displayName = 'Crown';
all['crown'] = Crown;

export const CurlyLoop = enhancerIcon('curly-loop', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 8c-4 0 -7 2 -7 5a3 3 0 0 0 6 0c0 -3 -2.5 -5 -8 -5s-8 2 -8 5a3 3 0 0 0 6 0c0 -3 -3 -5 -7 -5" />
</svg>
));
CurlyLoop.displayName = 'CurlyLoop';
all['curly-loop'] = CurlyLoop;

export const CurrencyBitcoin = enhancerIcon('currency-bitcoin', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
  <line x1="8" y1="6" x2="8" y2="18" />
  <line x1="8" y1="12" x2="14" y2="12" />
  <line x1="9" y1="3" x2="9" y2="6" />
  <line x1="13" y1="3" x2="13" y2="6" />
  <line x1="9" y1="18" x2="9" y2="21" />
  <line x1="13" y1="18" x2="13" y2="21" />
</svg>
));
CurrencyBitcoin.displayName = 'CurrencyBitcoin';
all['currency-bitcoin'] = CurrencyBitcoin;

export const CurrencyDollar = enhancerIcon('currency-dollar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
  <path d="M12 3v3m0 12v3" />
</svg>
));
CurrencyDollar.displayName = 'CurrencyDollar';
all['currency-dollar'] = CurrencyDollar;

export const CurrencyEuro = enhancerIcon('currency-euro', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17.2 7a6 7 0 1 0 0 10" />
  <path d="M13 10h-8m0 4h8" />
</svg>
));
CurrencyEuro.displayName = 'CurrencyEuro';
all['currency-euro'] = CurrencyEuro;

export const CurrencyPound = enhancerIcon('currency-pound', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 18.5a6 6 0 0 1 -5 0a6 6 0 0 0 -5 .5a3 3 0 0 0 2 -2.5v-7.5a4 4 0 0 1 7.45 -2m-2.55 6h-7" />
</svg>
));
CurrencyPound.displayName = 'CurrencyPound';
all['currency-pound'] = CurrencyPound;

export const CurrencyRupee = enhancerIcon('currency-rupee', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6" />
  <line x1="7" y1="10" x2="18" y2="10" />
</svg>
));
CurrencyRupee.displayName = 'CurrencyRupee';
all['currency-rupee'] = CurrencyRupee;

export const CurrencyYen = enhancerIcon('currency-yen', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 19v-7l-5 -7m10 0l-5 7" />
  <line x1="8" y1="17" x2="16" y2="17" />
  <line x1="8" y1="13" x2="16" y2="13" />
</svg>
));
CurrencyYen.displayName = 'CurrencyYen';
all['currency-yen'] = CurrencyYen;

export const CurrentLocation = enhancerIcon('current-location', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="3" />
  <circle cx="12" cy="12" r="8" />
  <line x1="12" y1="2" x2="12" y2="4" />
  <line x1="12" y1="20" x2="12" y2="22" />
  <line x1="20" y1="12" x2="22" y2="12" />
  <line x1="2" y1="12" x2="4" y2="12" />
</svg>
));
CurrentLocation.displayName = 'CurrentLocation';
all['current-location'] = CurrentLocation;

export const Cut = enhancerIcon('cut', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="17" r="3" />
  <circle cx="17" cy="17" r="3" />
  <line x1="9.15" y1="14.85" x2="18" y2="4" />
  <line x1="6" y1="4" x2="14.85" y2="14.85" />
</svg>
));
Cut.displayName = 'Cut';
all['cut'] = Cut;

export const Dashboard = enhancerIcon('dashboard', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="13" r="2" />
  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
  <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
</svg>
));
Dashboard.displayName = 'Dashboard';
all['dashboard'] = Dashboard;

export const Database = enhancerIcon('database', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
  <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
  <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
</svg>
));
Database.displayName = 'Database';
all['database'] = Database;

export const DeviceDesktop = enhancerIcon('device-desktop', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="4" width="18" height="12" rx="1" />
  <line x1="7" y1="20" x2="17" y2="20" />
  <line x1="9" y1="16" x2="9" y2="20" />
  <line x1="15" y1="16" x2="15" y2="20" />
</svg>
));
DeviceDesktop.displayName = 'DeviceDesktop';
all['device-desktop'] = DeviceDesktop;

export const DeviceFloppy = enhancerIcon('device-floppy', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
  <circle cx="12" cy="14" r="2" />
  <polyline points="14 4 14 8 8 8 8 4" />
</svg>
));
DeviceFloppy.displayName = 'DeviceFloppy';
all['device-floppy'] = DeviceFloppy;

export const DeviceGamepad = enhancerIcon('device-gamepad', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="2" y="6" width="20" height="12" rx="2" />
  <path d="M6 12h4m-2 -2v4" />
  <line x1="15" y1="11" x2="15" y2="11.01" />
  <line x1="18" y1="13" x2="18" y2="13.01" />
</svg>
));
DeviceGamepad.displayName = 'DeviceGamepad';
all['device-gamepad'] = DeviceGamepad;

export const DeviceLaptop = enhancerIcon('device-laptop', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="19" x2="21" y2="19" />
  <rect x="5" y="6" width="14" height="10" rx="1" />
</svg>
));
DeviceLaptop.displayName = 'DeviceLaptop';
all['device-laptop'] = DeviceLaptop;

export const DeviceMobileRotated = enhancerIcon('device-mobile-rotated', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <g transform="rotate(90 12 12)">
  <rect x="7" y="4" width="10" height="16" rx="1" />
  <line x1="11" y1="5" x2="13" y2="5" />
  <line x1="12" y1="17" x2="12" y2="17.01" />
    </g>
</svg>
));
DeviceMobileRotated.displayName = 'DeviceMobileRotated';
all['device-mobile-rotated'] = DeviceMobileRotated;

export const DeviceMobileVibration = enhancerIcon('device-mobile-vibration', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="10" height="16" rx="1" />
  <line x1="8" y1="5" x2="10" y2="5" />
  <line x1="9" y1="17" x2="9" y2="17.01" />
  <path d="M20 6l-2 3l2 3l-2 3l2 3" />
</svg>
));
DeviceMobileVibration.displayName = 'DeviceMobileVibration';
all['device-mobile-vibration'] = DeviceMobileVibration;

export const DeviceMobile = enhancerIcon('device-mobile', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="7" y="4" width="10" height="16" rx="1" />
  <line x1="11" y1="5" x2="13" y2="5" />
  <line x1="12" y1="17" x2="12" y2="17.01" />
</svg>
));
DeviceMobile.displayName = 'DeviceMobile';
all['device-mobile'] = DeviceMobile;

export const DeviceSpeaker = enhancerIcon('device-speaker', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="5" y="3" width="14" height="18" rx="2" />
  <circle cx="12" cy="14" r="3" />
  <line x1="12" y1="7" x2="12" y2="7.01" />
</svg>
));
DeviceSpeaker.displayName = 'DeviceSpeaker';
all['device-speaker'] = DeviceSpeaker;

export const DeviceTablet = enhancerIcon('device-tablet', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="5" y="3" width="14" height="18" rx="1" />
  <circle cx="12" cy="17" r="1" />
</svg>
));
DeviceTablet.displayName = 'DeviceTablet';
all['device-tablet'] = DeviceTablet;

export const DeviceTv = enhancerIcon('device-tv', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="7" width="18" height="13" rx="2" />
  <polyline points="16 3 12 7 8 3" />
</svg>
));
DeviceTv.displayName = 'DeviceTv';
all['device-tv'] = DeviceTv;

export const DeviceWatch = enhancerIcon('device-watch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="6" y="6" width="12" height="12" rx="3" />
  <path d="M9 18v3h6v-3" />
  <path d="M9 6v-3h6v3" />
</svg>
));
DeviceWatch.displayName = 'DeviceWatch';
all['device-watch'] = DeviceWatch;

export const Devices2 = enhancerIcon('devices-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" />
  <rect x="13" y="4" width="8" height="16" rx="1" />
  <line x1="7" y1="19" x2="10" y2="19" />
  <line x1="17" y1="8" x2="17" y2="8.01" />
  <circle cx="17" cy="16" r="1" />
  <line x1="9" y1="15" x2="9" y2="19" />
</svg>
));
Devices2.displayName = 'Devices2';
all['devices-2'] = Devices2;

export const Devices = enhancerIcon('devices', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="13" y="8" width="8" height="12" rx="1" />
  <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
  <line x1="16" y1="9" x2="18" y2="9" />
</svg>
));
Devices.displayName = 'Devices';
all['devices'] = Devices;

export const Diamond = enhancerIcon('diamond', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 5h12l3 5l-8.5 9.5a0.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
  <path d="M10 12l-2 -2.2l.6 -1" />
</svg>
));
Diamond.displayName = 'Diamond';
all['diamond'] = Diamond;

export const Dice = enhancerIcon('dice', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
  <circle cx="15.5" cy="8.5" r=".5" fill="currentColor" />
  <circle cx="15.5" cy="15.5" r=".5" fill="currentColor" />
  <circle cx="8.5" cy="15.5" r=".5" fill="currentColor" />
</svg>
));
Dice.displayName = 'Dice';
all['dice'] = Dice;

export const DirectionHorizontal = enhancerIcon('direction-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 9l-3 3l3 3" />
  <path d="M14 9l3 3l-3 3" />
</svg>
));
DirectionHorizontal.displayName = 'DirectionHorizontal';
all['direction-horizontal'] = DirectionHorizontal;

export const Direction = enhancerIcon('direction', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 10l3 -3l3 3" />
  <path d="M9 14l3 3l3 -3" />
</svg>
));
Direction.displayName = 'Direction';
all['direction'] = Direction;

export const Directions = enhancerIcon('directions', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 5h10l2 2l-2 2h-10a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
  <path d="M13 13h-7l-2 2l2 2h7a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1" />
  <line x1="12" y1="22" x2="12" y2="17" />
  <line x1="12" y1="13" x2="12" y2="9" />
  <line x1="12" y1="5" x2="12" y2="3" />
</svg>
));
Directions.displayName = 'Directions';
all['directions'] = Directions;

export const Disabled2 = enhancerIcon('disabled-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="17" cy="6" r="2" />
  <path d="M9 11a5 5 0 1 0 3.95 7.95" />
  <path d="M19 20l-4 -5h-4l3 -5l-4 -3l-4 1" />
</svg>
));
Disabled2.displayName = 'Disabled2';
all['disabled-2'] = Disabled2;

export const Disabled = enhancerIcon('disabled', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="11" cy="5" r="2" />
  <polyline points="11 7 11 15 15 15 19 20" />
  <line x1="11" y1="11" x2="16" y2="11" />
  <path d="M7 11.5a5 5 0 1 0 6 7.5" />
</svg>
));
Disabled.displayName = 'Disabled';
all['disabled'] = Disabled;

export const Disc = enhancerIcon('disc', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <circle cx="12" cy="12" r="1" />
  <path d="M7 12a5 5 0 0 1 5 -5" />
  <path d="M12 17a5 5 0 0 0 5 -5" />
</svg>
));
Disc.displayName = 'Disc';
all['disc'] = Disc;

export const Discount = enhancerIcon('discount', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="9" y1="15" x2="15" y2="9" />
  <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
  <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
  <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
</svg>
));
Discount.displayName = 'Discount';
all['discount'] = Discount;

export const Divide = enhancerIcon('divide', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle fill="currentColor" cx="12" cy="6" r="1" />
  <circle fill="currentColor" cx="12" cy="18" r="1" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>
));
Divide.displayName = 'Divide';
all['divide'] = Divide;

export const DotsCircleHorizontal = enhancerIcon('dots-circle-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
</svg>
));
DotsCircleHorizontal.displayName = 'DotsCircleHorizontal';
all['dots-circle-horizontal'] = DotsCircleHorizontal;

export const DotsDiagonal2 = enhancerIcon('dots-diagonal-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="7" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="17" cy="17" r="1" />
</svg>
));
DotsDiagonal2.displayName = 'DotsDiagonal2';
all['dots-diagonal-2'] = DotsDiagonal2;

export const DotsDiagonal = enhancerIcon('dots-diagonal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="17" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="17" cy="7" r="1" />
</svg>
));
DotsDiagonal.displayName = 'DotsDiagonal';
all['dots-diagonal'] = DotsDiagonal;

export const DotsVertical = enhancerIcon('dots-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="19" r="1" />
  <circle cx="12" cy="5" r="1" />
</svg>
));
DotsVertical.displayName = 'DotsVertical';
all['dots-vertical'] = DotsVertical;

export const Dots = enhancerIcon('dots', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="12" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="19" cy="12" r="1" />
</svg>
));
Dots.displayName = 'Dots';
all['dots'] = Dots;

export const Download = enhancerIcon('download', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <polyline points="7 11 12 16 17 11" />
  <line x1="12" y1="4" x2="12" y2="16" />
</svg>
));
Download.displayName = 'Download';
all['download'] = Download;

export const DragDrop2 = enhancerIcon('drag-drop-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="8" y="8" width="12" height="12" rx="2" />
  <line x1="4" y1="4" x2="4" y2="4.01" />
  <line x1="8" y1="4" x2="8" y2="4.01" />
  <line x1="12" y1="4" x2="12" y2="4.01" />
  <line x1="16" y1="4" x2="16" y2="4.01" />
  <line x1="4" y1="8" x2="4" y2="8.01" />
  <line x1="4" y1="12" x2="4" y2="12.01" />
  <line x1="4" y1="16" x2="4" y2="16.01" />
</svg>
));
DragDrop2.displayName = 'DragDrop2';
all['drag-drop-2'] = DragDrop2;

export const DragDrop = enhancerIcon('drag-drop', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
  <path d="M13 13l9 3l-4 2l-2 4l-3 -9" />
  <line x1="3" y1="3" x2="3" y2="3.01" />
  <line x1="7" y1="3" x2="7" y2="3.01" />
  <line x1="11" y1="3" x2="11" y2="3.01" />
  <line x1="15" y1="3" x2="15" y2="3.01" />
  <line x1="3" y1="7" x2="3" y2="7.01" />
  <line x1="3" y1="11" x2="3" y2="11.01" />
  <line x1="3" y1="15" x2="3" y2="15.01" />
</svg>
));
DragDrop.displayName = 'DragDrop';
all['drag-drop'] = DragDrop;

export const Drone = enhancerIcon('drone', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10h4v4h-4z" />
  <line x1="10" y1="10" x2="6.5" y2="6.5" />
  <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
  <path d="M14 10l3.5 -3.5" />
  <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
  <line x1="14" y1="14" x2="17.5" y2="17.5" />
  <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
  <line x1="10" y1="14" x2="6.5" y2="17.5" />
  <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
</svg>
));
Drone.displayName = 'Drone';
all['drone'] = Drone;

export const Droplet = enhancerIcon('droplet', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3l5 5a7 7 0 1 1 -10 0l5 -5" />
</svg>
));
Droplet.displayName = 'Droplet';
all['droplet'] = Droplet;

export const Ear = enhancerIcon('ear', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1 -2 2a8 8 0 0 0 -2 3a4.5 4.5 0 0 1 -6.8 1.4" />
  <path d="M10 10a3 3 0 1 1 5 2.2" />
</svg>
));
Ear.displayName = 'Ear';
all['ear'] = Ear;

export const Edit = enhancerIcon('edit', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
  <line x1="16" y1="5" x2="19" y2="8" />
</svg>
));
Edit.displayName = 'Edit';
all['edit'] = Edit;

export const Egg = enhancerIcon('egg', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5.514 14.639c0 3.513 2.904 6.361 6.486 6.361s6.486 -2.848 6.486 -6.361a12.574 12.574 0 0 0 -3.243 -9.012a4.025 4.025 0 0 0 -3.243 -1.627a4.025 4.025 0 0 0 -3.243 1.627a12.574 12.574 0 0 0 -3.243 9.012" />
</svg>
));
Egg.displayName = 'Egg';
all['egg'] = Egg;

export const Emphasis = enhancerIcon('emphasis', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 5h-8v10h8m-1 -5h-7" />
  <line x1="6" y1="20" x2="6" y2="20.01" />
  <line x1="10" y1="20" x2="10" y2="20.01" />
  <line x1="14" y1="20" x2="14" y2="20.01" />
  <line x1="18" y1="20" x2="18" y2="20.01" />
</svg>
));
Emphasis.displayName = 'Emphasis';
all['emphasis'] = Emphasis;

export const Eraser = enhancerIcon('eraser', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 19h-11l-4 -4a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9 9" />
  <line x1="18" y1="12.3" x2="11.7" y2="6" />
</svg>
));
Eraser.displayName = 'Eraser';
all['eraser'] = Eraser;

export const Exchange = enhancerIcon('exchange', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="18" r="2" />
  <circle cx="19" cy="6" r="2" />
  <path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3" />
  <path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3" />
</svg>
));
Exchange.displayName = 'Exchange';
all['exchange'] = Exchange;

export const Exposure = enhancerIcon('exposure', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="4.6" y1="19.4" x2="19.4" y2="4.6" />
  <path d="M7 9h4m-2 -2v4" />
  <line x1="13" y1="16" x2="17" y2="16" />
</svg>
));
Exposure.displayName = 'Exposure';
all['exposure'] = Exposure;

export const ExternalLink = enhancerIcon('external-link', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
  <line x1="10" y1="14" x2="20" y2="4" />
  <polyline points="15 4 20 4 20 9" />
</svg>
));
ExternalLink.displayName = 'ExternalLink';
all['external-link'] = ExternalLink;

export const EyeOff = enhancerIcon('eye-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
  <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
</svg>
));
EyeOff.displayName = 'EyeOff';
all['eye-off'] = EyeOff;

export const Eye = enhancerIcon('eye', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="2" />
  <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
</svg>
));
Eye.displayName = 'Eye';
all['eye'] = Eye;

export const FaceId = enhancerIcon('face-id', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <line x1="9" y1="10" x2="9.01" y2="10" />
  <line x1="15" y1="10" x2="15.01" y2="10" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
</svg>
));
FaceId.displayName = 'FaceId';
all['face-id'] = FaceId;

export const Fall = enhancerIcon('fall', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 21l1 -5l-1 -4l-3 -4h4l3 -3" />
  <path d="M6 16l-1 -4l3 -4" />
  <circle cx="6" cy="5" r="1" />
  <path d="M13.5 12h2.5l4 2" />
</svg>
));
Fall.displayName = 'Fall';
all['fall'] = Fall;

export const FileAlert = enhancerIcon('file-alert', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="12" y1="17" x2="12.01" y2="17" />
  <line x1="12" y1="11" x2="12" y2="14" />
</svg>
));
FileAlert.displayName = 'FileAlert';
all['file-alert'] = FileAlert;

export const FileAnalytics = enhancerIcon('file-analytics', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="9" y1="17" x2="9" y2="12" />
  <line x1="12" y1="17" x2="12" y2="16" />
  <line x1="15" y1="17" x2="15" y2="14" />
</svg>
));
FileAnalytics.displayName = 'FileAnalytics';
all['file-analytics'] = FileAnalytics;

export const FileCertificate = enhancerIcon('file-certificate', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
  <circle cx="6" cy="14" r="3" />
  <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
</svg>
));
FileCertificate.displayName = 'FileCertificate';
all['file-certificate'] = FileCertificate;

export const FileCheck = enhancerIcon('file-check', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M9 15l2 2l4 -4" />
</svg>
));
FileCheck.displayName = 'FileCheck';
all['file-check'] = FileCheck;

export const FileCode2 = enhancerIcon('file-code-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 12h-1v5h1" />
  <path d="M14 12h1v5h-1" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
</svg>
));
FileCode2.displayName = 'FileCode2';
all['file-code-2'] = FileCode2;

export const FileCode = enhancerIcon('file-code', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M10 13l-1 2l1 2" />
  <path d="M14 13l1 2l-1 2" />
</svg>
));
FileCode.displayName = 'FileCode';
all['file-code'] = FileCode;

export const FileDiff = enhancerIcon('file-diff', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="12" y1="10" x2="12" y2="14" />
  <line x1="10" y1="12" x2="14" y2="12" />
  <line x1="10" y1="17" x2="14" y2="17" />
</svg>
));
FileDiff.displayName = 'FileDiff';
all['file-diff'] = FileDiff;

export const FileDislike = enhancerIcon('file-dislike', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="14" width="3" height="5" rx="1" />
  <path d="M6 15a1 1 0 0 1 1 -1h3.756a1 1 0 0 1 .958 .713l1.2 3c.09 .303 .133 .63 -.056 .884c-.188 .254 -.542 .403 -.858 .403h-2v2.467a1.1 1.1 0 0 1 -2.015 .61l-1.985 -3.077v-4z" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-2.5" />
</svg>
));
FileDislike.displayName = 'FileDislike';
all['file-dislike'] = FileDislike;

export const FileDownload = enhancerIcon('file-download', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="12" y1="11" x2="12" y2="17" />
  <polyline points="9 14 12 17 15 14" />
</svg>
));
FileDownload.displayName = 'FileDownload';
all['file-download'] = FileDownload;

export const FileExport = enhancerIcon('file-export', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3" />
</svg>
));
FileExport.displayName = 'FileExport';
all['file-export'] = FileExport;

export const FileHorizontal = enhancerIcon('file-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 5v4a1 1 0 0 0 1 1h4" />
  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
</svg>
));
FileHorizontal.displayName = 'FileHorizontal';
all['file-horizontal'] = FileHorizontal;

export const FileImport = enhancerIcon('file-import', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3" />
</svg>
));
FileImport.displayName = 'FileImport';
all['file-import'] = FileImport;

export const FileInvoice = enhancerIcon('file-invoice', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="9" y1="7" x2="10" y2="7" />
  <line x1="9" y1="13" x2="15" y2="13" />
  <line x1="13" y1="17" x2="15" y2="17" />
</svg>
));
FileInvoice.displayName = 'FileInvoice';
all['file-invoice'] = FileInvoice;

export const FileLike = enhancerIcon('file-like', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="16" width="3" height="5" rx="1" />
  <path d="M6 20a1 1 0 0 0 1 1h3.756a1 1 0 0 0 .958 -.713l1.2 -3c.09 -.303 .133 -.63 -.056 -.884c-.188 -.254 -.542 -.403 -.858 -.403h-2v-2.467a1.1 1.1 0 0 0 -2.015 -.61l-1.985 3.077v4z" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 12.1v-7.1a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-2.3" />
</svg>
));
FileLike.displayName = 'FileLike';
all['file-like'] = FileLike;

export const FileMinus = enhancerIcon('file-minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="9" y1="14" x2="15" y2="14" />
</svg>
));
FileMinus.displayName = 'FileMinus';
all['file-minus'] = FileMinus;

export const FileMusic = enhancerIcon('file-music', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <circle cx="11" cy="16" r="1" />
  <polyline points="12 16 12 11 14 12" />
</svg>
));
FileMusic.displayName = 'FileMusic';
all['file-music'] = FileMusic;

export const FileOff = enhancerIcon('file-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M7 3h7l5 5v7m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
</svg>
));
FileOff.displayName = 'FileOff';
all['file-off'] = FileOff;

export const FilePhone = enhancerIcon('file-phone', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M9 12a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
</svg>
));
FilePhone.displayName = 'FilePhone';
all['file-phone'] = FilePhone;

export const FilePlus = enhancerIcon('file-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="12" y1="11" x2="12" y2="17" />
  <line x1="9" y1="14" x2="15" y2="14" />
</svg>
));
FilePlus.displayName = 'FilePlus';
all['file-plus'] = FilePlus;

export const FileSearch = enhancerIcon('file-search', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5" />
  <circle cx="16.5" cy="17.5" r="2.5" />
  <line x1="18.5" y1="19.5" x2="21" y2="22" />
</svg>
));
FileSearch.displayName = 'FileSearch';
all['file-search'] = FileSearch;

export const FileShredder = enhancerIcon('file-shredder', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="6" y1="16" x2="6" y2="18" />
  <line x1="10" y1="16" x2="10" y2="22" />
  <line x1="14" y1="16" x2="14" y2="18" />
  <line x1="18" y1="16" x2="18" y2="20" />
</svg>
));
FileShredder.displayName = 'FileShredder';
all['file-shredder'] = FileShredder;

export const FileSymlink = enhancerIcon('file-symlink', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 21v-4a3 3 0 0 1 3 -3h5" />
  <path d="M9 17l3 -3l-3 -3" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5" />
</svg>
));
FileSymlink.displayName = 'FileSymlink';
all['file-symlink'] = FileSymlink;

export const FileText = enhancerIcon('file-text', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="9" y1="9" x2="10" y2="9" />
  <line x1="9" y1="13" x2="15" y2="13" />
  <line x1="9" y1="17" x2="15" y2="17" />
</svg>
));
FileText.displayName = 'FileText';
all['file-text'] = FileText;

export const FileUpload = enhancerIcon('file-upload', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="12" y1="11" x2="12" y2="17" />
  <polyline points="9 14 12 11 15 14" />
</svg>
));
FileUpload.displayName = 'FileUpload';
all['file-upload'] = FileUpload;

export const FileX = enhancerIcon('file-x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M10 12l4 4m0 -4l-4 4" />
</svg>
));
FileX.displayName = 'FileX';
all['file-x'] = FileX;

export const FileZip = enhancerIcon('file-zip', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" />
  <path d="M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z" />
  <line x1="11" y1="5" x2="10" y2="5" />
  <line x1="13" y1="7" x2="12" y2="7" />
  <line x1="11" y1="9" x2="10" y2="9" />
  <line x1="13" y1="11" x2="12" y2="11" />
  <line x1="11" y1="13" x2="10" y2="13" />
  <line x1="13" y1="15" x2="12" y2="15" />
</svg>
));
FileZip.displayName = 'FileZip';
all['file-zip'] = FileZip;

export const File = enhancerIcon('file', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
</svg>
));
File.displayName = 'File';
all['file'] = File;

export const FilterOff = enhancerIcon('filter-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M9 5h9.5a1 1 0 0 1 .5 1.5l-4.049 4.454m-.951 3.046v5l-4 -3v-4l-5 -5.5a1 1 0 0 1 .18 -1.316" />
</svg>
));
FilterOff.displayName = 'FilterOff';
all['filter-off'] = FilterOff;

export const Filter = enhancerIcon('filter', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
</svg>
));
Filter.displayName = 'Filter';
all['filter'] = Filter;

export const Fingerprint = enhancerIcon('fingerprint', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
  <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
  <path d="M12 11v2a14 14 0 0 0 2.5 8" />
  <path d="M8 15a18 18 0 0 0 1.8 6" />
  <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
</svg>
));
Fingerprint.displayName = 'Fingerprint';
all['fingerprint'] = Fingerprint;

export const Firetruck = enhancerIcon('firetruck', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="17" r="2" />
  <circle cx="17" cy="17" r="2" />
  <path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" />
  <path d="M12 18v-11h3" />
  <polyline points="3 17 3 12 12 12" />
  <line x1="3" y1="9" x2="21" y2="3" />
  <line x1="6" y1="12" x2="6" y2="8" />
</svg>
));
Firetruck.displayName = 'Firetruck';
all['firetruck'] = Firetruck;

export const Flag = enhancerIcon('flag', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="5" x2="5" y2="21" />
  <line x1="19" y1="5" x2="19" y2="14" />
  <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
  <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
</svg>
));
Flag.displayName = 'Flag';
all['flag'] = Flag;

export const Flame = enhancerIcon('flame', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.762 4.383 -2.989 5.642c-1.226 1.26 -2.011 2.598 -2.011 4.358a6 6 0 1 0 12 0c0 -1.532 -.77 -2.94 -1.714 -4c-1.786 3 -3.077 3 -4.286 2z" />
</svg>
));
Flame.displayName = 'Flame';
all['flame'] = Flame;

export const Flask = enhancerIcon('flask', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="9" y1="3" x2="15" y2="3" />
  <line x1="10" y1="9" x2="14" y2="9" />
  <path d="M10 3v6l-4 11a0.7 .7 0 0 0 .5 1h11a0.7 .7 0 0 0 .5 -1l-4 -11v-6" />
</svg>
));
Flask.displayName = 'Flask';
all['flask'] = Flask;

export const FlipHorizontal = enhancerIcon('flip-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="12" x2="21" y2="12" />
  <polyline points="7 16 17 16 7 21 7 16" />
  <polyline points="7 8 17 8 7 3 7 8" />
</svg>
));
FlipHorizontal.displayName = 'FlipHorizontal';
all['flip-horizontal'] = FlipHorizontal;

export const FlipVertical = enhancerIcon('flip-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="3" x2="12" y2="21" />
  <polyline points="16 7 16 17 21 17 16 7" />
  <polyline points="8 7 8 17 3 17 8 7" />
</svg>
));
FlipVertical.displayName = 'FlipVertical';
all['flip-vertical'] = FlipVertical;

export const FloatCenter = enhancerIcon('float-center', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect width="6" height="6" x="9" y="5" rx="1" />
  <line x1="4" y1="7" x2="5" y2="7" />
  <line x1="4" y1="11" x2="5" y2="11" />
  <line x1="19" y1="7" x2="20" y2="7" />
  <line x1="19" y1="11" x2="20" y2="11" />
  <line x1="4" y1="15" x2="20" y2="15" />
  <line x1="4" y1="19" x2="20" y2="19" />
</svg>
));
FloatCenter.displayName = 'FloatCenter';
all['float-center'] = FloatCenter;

export const FloatLeft = enhancerIcon('float-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect width="6" height="6" x="4" y="5" rx="1" />
  <line x1="14" y1="7" x2="20" y2="7" />
  <line x1="14" y1="11" x2="20" y2="11" />
  <line x1="4" y1="15" x2="20" y2="15" />
  <line x1="4" y1="19" x2="20" y2="19" />
</svg>
));
FloatLeft.displayName = 'FloatLeft';
all['float-left'] = FloatLeft;

export const FloatNone = enhancerIcon('float-none', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect width="6" height="6" x="4" y="5" rx="1" />
  <line x1="4" y1="15" x2="20" y2="15" />
  <line x1="4" y1="19" x2="20" y2="19" />
</svg>
));
FloatNone.displayName = 'FloatNone';
all['float-none'] = FloatNone;

export const FloatRight = enhancerIcon('float-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect width="6" height="6" x="14" y="5" rx="1" />
  <line x1="4" y1="7" x2="10" y2="7" />
  <line x1="4" y1="11" x2="10" y2="11" />
  <line x1="4" y1="15" x2="20" y2="15" />
  <line x1="4" y1="19" x2="20" y2="19" />
</svg>
));
FloatRight.displayName = 'FloatRight';
all['float-right'] = FloatRight;

export const Focus2 = enhancerIcon('focus-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r=".5" fill="currentColor" />
  <circle cx="12" cy="12" r="7" />
  <line x1="12" y1="3" x2="12" y2="5" />
  <line x1="3" y1="12" x2="5" y2="12" />
  <line x1="12" y1="19" x2="12" y2="21" />
  <line x1="19" y1="12" x2="21" y2="12" />
</svg>
));
Focus2.displayName = 'Focus2';
all['focus-2'] = Focus2;

export const Focus = enhancerIcon('focus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r=".5" fill="currentColor" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
Focus.displayName = 'Focus';
all['focus'] = Focus;

export const FoldDown = enhancerIcon('fold-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 11v8l3 -3m-6 0l3 3" />
  <line x1="9" y1="7" x2="10" y2="7" />
  <line x1="14" y1="7" x2="15" y2="7" />
  <line x1="19" y1="7" x2="20" y2="7" />
  <line x1="4" y1="7" x2="5" y2="7" />
</svg>
));
FoldDown.displayName = 'FoldDown';
all['fold-down'] = FoldDown;

export const FoldUp = enhancerIcon('fold-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 13v-8l-3 3m6 0l-3 -3" />
  <line x1="9" y1="17" x2="10" y2="17" />
  <line x1="14" y1="17" x2="15" y2="17" />
  <line x1="19" y1="17" x2="20" y2="17" />
  <line x1="4" y1="17" x2="5" y2="17" />
</svg>
));
FoldUp.displayName = 'FoldUp';
all['fold-up'] = FoldUp;

export const Fold = enhancerIcon('fold', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3v6l3 -3m-6 0l3 3" />
  <path d="M12 21v-6l3 3m-6 0l3 -3" />
  <line x1="4" y1="12" x2="5" y2="12" />
  <line x1="9" y1="12" x2="10" y2="12" />
  <line x1="14" y1="12" x2="15" y2="12" />
  <line x1="19" y1="12" x2="20" y2="12" />
</svg>
));
Fold.displayName = 'Fold';
all['fold'] = Fold;

export const FolderMinus = enhancerIcon('folder-minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
  <line x1="9" y1="13" x2="15" y2="13" />
</svg>
));
FolderMinus.displayName = 'FolderMinus';
all['folder-minus'] = FolderMinus;

export const FolderOff = enhancerIcon('folder-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M19 19h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 1.172 -1.821m3.828 -.179h1l3 3h7a2 2 0 0 1 2 2v8" />
</svg>
));
FolderOff.displayName = 'FolderOff';
all['folder-off'] = FolderOff;

export const FolderPlus = enhancerIcon('folder-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
  <line x1="12" y1="10" x2="12" y2="16" />
  <line x1="9" y1="13" x2="15" y2="13" />
</svg>
));
FolderPlus.displayName = 'FolderPlus';
all['folder-plus'] = FolderPlus;

export const FolderX = enhancerIcon('folder-x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
  <path d="M10 11l4 4m0 -4l-4 4" />
</svg>
));
FolderX.displayName = 'FolderX';
all['folder-x'] = FolderX;

export const Folder = enhancerIcon('folder', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
</svg>
));
Folder.displayName = 'Folder';
all['folder'] = Folder;

export const Folders = enhancerIcon('folders', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
  <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
</svg>
));
Folders.displayName = 'Folders';
all['folders'] = Folders;

export const Forbid2 = enhancerIcon('forbid-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="15" x2="15" y2="9" />
</svg>
));
Forbid2.displayName = 'Forbid2';
all['forbid-2'] = Forbid2;

export const Forbid = enhancerIcon('forbid', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="9" x2="15" y2="15" />
</svg>
));
Forbid.displayName = 'Forbid';
all['forbid'] = Forbid;

export const Forklift = enhancerIcon('forklift', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="17" r="2" />
  <circle cx="14" cy="17" r="2" />
  <line x1="7" y1="17" x2="12" y2="17" />
  <path d="M3 17v-6h13v6" />
  <path d="M5 11v-4h4" />
  <path d="M9 11v-6h4l3 6" />
  <path d="M22 15h-3v-10" />
  <line x1="16" y1="13" x2="19" y2="13" />
</svg>
));
Forklift.displayName = 'Forklift';
all['forklift'] = Forklift;

export const Frame = enhancerIcon('frame', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="7" x2="20" y2="7" />
  <line x1="4" y1="17" x2="20" y2="17" />
  <line x1="7" y1="4" x2="7" y2="20" />
  <line x1="17" y1="4" x2="17" y2="20" />
</svg>
));
Frame.displayName = 'Frame';
all['frame'] = Frame;

export const Friends = enhancerIcon('friends', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="5" r="2" />
  <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
  <circle cx="17" cy="5" r="2" />
  <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
</svg>
));
Friends.displayName = 'Friends';
all['friends'] = Friends;

export const GasStation = enhancerIcon('gas-station', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" />
  <line x1="4" y1="19" x2="14" y2="19" />
  <line x1="5" y1="11" x2="13" y2="11" />
  <path d="M5 19v-12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v12" />
  <path d="M17 7v1a1 1 0 0 0 1 1h1" />
</svg>
));
GasStation.displayName = 'GasStation';
all['gas-station'] = GasStation;

export const Gauge = enhancerIcon('gauge', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <circle cx="12" cy="12" r="1" />
  <line x1="13.41" y1="10.59" x2="16" y2="8" />
  <path d="M7 12a5 5 0 0 1 5 -5" />
</svg>
));
Gauge.displayName = 'Gauge';
all['gauge'] = Gauge;

export const Ghost = enhancerIcon('ghost', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
  <line x1="10" y1="10" x2="10.01" y2="10" />
  <line x1="14" y1="10" x2="14.01" y2="10" />
  <path d="M10 14a3.5 3.5 0 0 0 4 0" />
</svg>
));
Ghost.displayName = 'Ghost';
all['ghost'] = Ghost;

export const Gift = enhancerIcon('gift', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="8" width="18" height="4" rx="1" />
  <line x1="12" y1="8" x2="12" y2="21" />
  <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
  <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
</svg>
));
Gift.displayName = 'Gift';
all['gift'] = Gift;

export const GitBranch = enhancerIcon('git-branch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="18" r="2" />
  <circle cx="7" cy="6" r="2" />
  <circle cx="17" cy="6" r="2" />
  <line x1="7" y1="8" x2="7" y2="16" />
  <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
  <polyline points="14 14 17 11 20 14" />
</svg>
));
GitBranch.displayName = 'GitBranch';
all['git-branch'] = GitBranch;

export const GitCommit = enhancerIcon('git-commit', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="3" />
  <line x1="12" y1="3" x2="12" y2="9" />
  <line x1="12" y1="15" x2="12" y2="21" />
</svg>
));
GitCommit.displayName = 'GitCommit';
all['git-commit'] = GitCommit;

export const GitCompare = enhancerIcon('git-compare', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="6" r="2" />
  <circle cx="18" cy="18" r="2" />
  <path d="M11 6h5a2 2 0 0 1 2 2v8" />
  <polyline points="14 9 11 6 14 3" />
  <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" />
  <polyline points="10 15 13 18 10 21" />
</svg>
));
GitCompare.displayName = 'GitCompare';
all['git-compare'] = GitCompare;

export const GitFork = enhancerIcon('git-fork', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="18" r="2" />
  <circle cx="7" cy="6" r="2" />
  <circle cx="17" cy="6" r="2" />
  <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
  <line x1="12" y1="12" x2="12" y2="16" />
</svg>
));
GitFork.displayName = 'GitFork';
all['git-fork'] = GitFork;

export const GitMerge = enhancerIcon('git-merge', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="18" r="2" />
  <circle cx="7" cy="6" r="2" />
  <circle cx="17" cy="12" r="2" />
  <line x1="7" y1="8" x2="7" y2="16" />
  <path d="M7 8a4 4 0 0 0 4 4h4" />
</svg>
));
GitMerge.displayName = 'GitMerge';
all['git-merge'] = GitMerge;

export const GitPullRequest = enhancerIcon('git-pull-request', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="18" r="2" />
  <circle cx="6" cy="6" r="2" />
  <circle cx="18" cy="18" r="2" />
  <line x1="6" y1="8" x2="6" y2="16" />
  <path d="M11 6h5a2 2 0 0 1 2 2v8" />
  <polyline points="14 9 11 6 14 3" />
</svg>
));
GitPullRequest.displayName = 'GitPullRequest';
all['git-pull-request'] = GitPullRequest;

export const GlassFull = enhancerIcon('glass-full', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="8" y1="21" x2="16" y2="21" />
  <line x1="12" y1="15" x2="12" y2="21" />
  <path d="M16 4l1 6a5 5 0 0 1 -10 0l1 -6z" />
  <path d="M7 10a4 4 0 0 1 5 0a4 4 0 0 0 5 0" />
</svg>
));
GlassFull.displayName = 'GlassFull';
all['glass-full'] = GlassFull;

export const Glass = enhancerIcon('glass', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="8" y1="21" x2="16" y2="21" />
  <line x1="12" y1="15" x2="12" y2="21" />
  <path d="M16 4l1 6a5 5 0 0 1 -10 0l1 -6z" />
</svg>
));
Glass.displayName = 'Glass';
all['glass'] = Glass;

export const Globe = enhancerIcon('globe', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="10" r="4" />
  <path d="M6.75 16a8.015 8.015 0 1 0 9.25 -13" />
  <line x1="12" y1="18" x2="12" y2="22" />
  <line x1="8" y1="22" x2="16" y2="22" />
</svg>
));
Globe.displayName = 'Globe';
all['globe'] = Globe;

export const Golf = enhancerIcon('golf', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 18v-15l7 4l-7 4" />
  <path d="M9 17.67c-.62 .36 -1 .82 -1 1.33c0 1.1 1.8 2 4 2s4 -.9 4 -2c0 -.5 -.38 -.97 -1 -1.33" />
</svg>
));
Golf.displayName = 'Golf';
all['golf'] = Golf;

export const Gps = enhancerIcon('gps', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M12 17l-1 -4l-4 -1l9 -4z" />
</svg>
));
Gps.displayName = 'Gps';
all['gps'] = Gps;

export const GridDots = enhancerIcon('grid-dots', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="5" r="1" />
  <circle cx="12" cy="5" r="1" />
  <circle cx="19" cy="5" r="1" />
  <circle cx="5" cy="12" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="19" cy="12" r="1" />
  <circle cx="5" cy="19" r="1" />
  <circle cx="12" cy="19" r="1" />
  <circle cx="19" cy="19" r="1" />
</svg>
));
GridDots.displayName = 'GridDots';
all['grid-dots'] = GridDots;

export const GripHorizontal = enhancerIcon('grip-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="9" r="1" />
  <circle cx="5" cy="15" r="1" />
  <circle cx="12" cy="9" r="1" />
  <circle cx="12" cy="15" r="1" />
  <circle cx="19" cy="9" r="1" />
  <circle cx="19" cy="15" r="1" />
</svg>
));
GripHorizontal.displayName = 'GripHorizontal';
all['grip-horizontal'] = GripHorizontal;

export const GripVertical = enhancerIcon('grip-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="5" r="1" />
  <circle cx="9" cy="12" r="1" />
  <circle cx="9" cy="19" r="1" />
  <circle cx="15" cy="5" r="1" />
  <circle cx="15" cy="12" r="1" />
  <circle cx="15" cy="19" r="1" />
</svg>
));
GripVertical.displayName = 'GripVertical';
all['grip-vertical'] = GripVertical;

export const H1 = enhancerIcon('h-1', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="5" x2="3" y2="19" />
  <line x1="3" y1="12" x2="12" y2="12" />
  <line x1="12" y1="5" x2="12" y2="19" />
  <path d="M20 19v-10l-3 3" />
</svg>
));
H1.displayName = 'H1';
all['h-1'] = H1;

export const H2 = enhancerIcon('h-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="5" x2="3" y2="19" />
  <line x1="3" y1="12" x2="12" y2="12" />
  <line x1="12" y1="5" x2="12" y2="19" />
  <path d="M21 19h-5l4.47 -5.96a2.5 2.5 0 1 0 -4.47 -1.54" />
</svg>
));
H2.displayName = 'H2';
all['h-2'] = H2;

export const H3 = enhancerIcon('h-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="5" x2="3" y2="19" />
  <line x1="3" y1="12" x2="12" y2="12" />
  <line x1="12" y1="5" x2="12" y2="19" />
  <path d="M16 11.5a2.5 2.5 0 1 1 2.5 2.5a2.5 2.5 0 1 1 -2.5 2.5" />
</svg>
));
H3.displayName = 'H3';
all['h-3'] = H3;

export const H4 = enhancerIcon('h-4', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="5" x2="3" y2="19" />
  <line x1="3" y1="12" x2="12" y2="12" />
  <line x1="12" y1="5" x2="12" y2="19" />
  <path d="M20 19v-10l-5 8h7" />
</svg>
));
H4.displayName = 'H4';
all['h-4'] = H4;

export const H5 = enhancerIcon('h-5', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="5" x2="3" y2="19" />
  <line x1="3" y1="12" x2="12" y2="12" />
  <line x1="12" y1="5" x2="12" y2="19" />
  <path d="M16 18.27a3 3 0 1 0 0 -4.537l0 -4.733h5" />
</svg>
));
H5.displayName = 'H5';
all['h-5'] = H5;

export const H6 = enhancerIcon('h-6', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="5" x2="3" y2="19" />
  <line x1="3" y1="12" x2="12" y2="12" />
  <line x1="12" y1="5" x2="12" y2="19" />
  <circle cx="18.5" cy="16.5" r="2.5" />
  <line x1="20" y1="9" x2="16.5" y2="15" />
</svg>
));
H6.displayName = 'H6';
all['h-6'] = H6;

export const HandMiddleFinger = enhancerIcon('hand-middle-finger', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 13.5v-4a1.5 1.5 0 0 1 3 0v2.5m0 -2.5v-6a1.5 1.5 0 0 1 3 0v8.5m0 -2.5a1.5 1.5 0 0 1 3 0v2.5m0 -1.5a1.5 1.5 0 0 1 3 0v5.5a6 6 0 0 1 -6 6h-2a7 6 0 0 1 -5 -3l-2.7 -5.25a1.4 1.4 0 0 1 2.75 -2l.9 1.75" />
</svg>
));
HandMiddleFinger.displayName = 'HandMiddleFinger';
all['hand-middle-finger'] = HandMiddleFinger;

export const HandOff = enhancerIcon('hand-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M8 13.5v-5.5m.44 -3.562a1.5 1.5 0 0 1 2.56 1.062v1.5m0 4.008v.992m0 -6.5v-2a1.5 1.5 0 1 1 3 0v6.5m0 -4.5a1.5 1.5 0 0 1 3 0v6.5m0 -4.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2c-2.114 -.292 -3.956 -1.397 -5 -3l-2.7 -5.25a1.7 1.7 0 0 1 2.75 -2l.9 1.75" />
</svg>
));
HandOff.displayName = 'HandOff';
all['hand-off'] = HandOff;

export const HandStop = enhancerIcon('hand-stop', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 13.5v-8a1.5 1.5 0 0 1 3 0v6.5m0 -6.5v-2a1.5 1.5 0 0 1 3 0v8.5m0 -6.5a1.5 1.5 0 0 1 3 0v6.5m0 -4.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2a7 6 0 0 1 -5 -3l-2.7 -5.25a1.4 1.4 0 0 1 2.75 -2l.9 1.75" />
</svg>
));
HandStop.displayName = 'HandStop';
all['hand-stop'] = HandStop;

export const Hash = enhancerIcon('hash', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="9" x2="19" y2="9" />
  <line x1="5" y1="15" x2="19" y2="15" />
  <line x1="11" y1="4" x2="7" y2="20" />
  <line x1="17" y1="4" x2="13" y2="20" />
</svg>
));
Hash.displayName = 'Hash';
all['hash'] = Hash;

export const HeadphonesOff = enhancerIcon('headphones-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <rect x="4" y="13" width="5" height="7" rx="2" />
  <path d="M17 13h1a2 2 0 0 1 2 2v1m-.589 3.417c-.361 .36 -.86 .583 -1.411 .583h-1a2 2 0 0 1 -2 -2v-3" />
  <path d="M4 15v-3c0 -2.21 .896 -4.21 2.344 -5.658m2.369 -1.638a8 8 0 0 1 11.287 7.296v3" />
</svg>
));
HeadphonesOff.displayName = 'HeadphonesOff';
all['headphones-off'] = HeadphonesOff;

export const Headphones = enhancerIcon('headphones', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="13" rx="2" width="5" height="7" />
  <rect x="15" y="13" rx="2" width="5" height="7" />
  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
</svg>
));
Headphones.displayName = 'Headphones';
all['headphones'] = Headphones;

export const Headset = enhancerIcon('headset', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="13" rx="2" width="4" height="6" />
  <rect x="16" y="13" rx="2" width="4" height="6" />
  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
  <path d="M18 19a6 3 0 0 1 -6 3" />
</svg>
));
Headset.displayName = 'Headset';
all['headset'] = Headset;

export const HeartBroken = enhancerIcon('heart-broken', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  <path d="M12 7l-2 4l4 3l-2 4v3" />
</svg>
));
HeartBroken.displayName = 'HeartBroken';
all['heart-broken'] = HeartBroken;

export const Heart = enhancerIcon('heart', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
</svg>
));
Heart.displayName = 'Heart';
all['heart'] = Heart;

export const HelicopterLanding = enhancerIcon('helicopter-landing', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="9" y1="8" x2="9" y2="16" />
  <line x1="9" y1="12" x2="15" y2="12" />
  <line x1="15" y1="8" x2="15" y2="16" />
</svg>
));
HelicopterLanding.displayName = 'HelicopterLanding';
all['helicopter-landing'] = HelicopterLanding;

export const Helicopter = enhancerIcon('helicopter', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 10l1 2h6" />
  <path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z" />
  <line x1="13" y1="9" x2="13" y2="6" />
  <line x1="5" y1="6" x2="20" y2="6" />
  <path d="M15 9.1v3.9h5.5" />
  <line x1="15" y1="19" x2="15" y2="16" />
  <line x1="19" y1="19" x2="11" y2="19" />
</svg>
));
Helicopter.displayName = 'Helicopter';
all['helicopter'] = Helicopter;

export const Help = enhancerIcon('help', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="17" x2="12" y2="17.01" />
  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
</svg>
));
Help.displayName = 'Help';
all['help'] = Help;

export const Hexagon = enhancerIcon('hexagon', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 6.873a2 2 0 0 1 1 1.747v6.536a2 2 0 0 1 -1.029 1.748l-6 3.833a2 2 0 0 1 -1.942 0l-6 -3.833a2 2 0 0 1 -1.029 -1.747v-6.537a2 2 0 0 1 1.029 -1.748l6 -3.572a2.056 2.056 0 0 1 2 0l6 3.573z" />
</svg>
));
Hexagon.displayName = 'Hexagon';
all['hexagon'] = Hexagon;

export const History = enhancerIcon('history', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="12 8 12 12 14 14" />
  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
</svg>
));
History.displayName = 'History';
all['history'] = History;

export const Home2 = enhancerIcon('home-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="5 12 3 12 12 3 21 12 19 12" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
  <rect x="10" y="12" width="4" height="4" />
</svg>
));
Home2.displayName = 'Home2';
all['home-2'] = Home2;

export const Home = enhancerIcon('home', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="5 12 3 12 12 3 21 12 19 12" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
</svg>
));
Home.displayName = 'Home';
all['home'] = Home;

export const IceCream = enhancerIcon('ice-cream', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="8" y2="16" />
  <line x1="5" y1="13" x2="11" y2="19" />
  <path d="M11 19l7 -7a4 4 0 0 0 -6 -6l-7 7" />
</svg>
));
IceCream.displayName = 'IceCream';
all['ice-cream'] = IceCream;

export const Id = enhancerIcon('id', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="4" width="18" height="16" rx="3" />
  <circle cx="9" cy="10" r="2" />
  <line x1="15" y1="8" x2="17" y2="8" />
  <line x1="15" y1="12" x2="17" y2="12" />
  <line x1="7" y1="16" x2="17" y2="16" />
</svg>
));
Id.displayName = 'Id';
all['id'] = Id;

export const Inbox = enhancerIcon('inbox', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M4 13h3l3 3h4l3 -3h3" />
</svg>
));
Inbox.displayName = 'Inbox';
all['inbox'] = Inbox;

export const IndentDecrease = enhancerIcon('indent-decrease', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="20" y1="6" x2="13" y2="6" />
  <line x1="20" y1="12" x2="11" y2="12" />
  <line x1="20" y1="18" x2="13" y2="18" />
  <path d="M8 8l-4 4l4 4" />
</svg>
));
IndentDecrease.displayName = 'IndentDecrease';
all['indent-decrease'] = IndentDecrease;

export const IndentIncrease = enhancerIcon('indent-increase', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="20" y1="6" x2="9" y2="6" />
  <line x1="20" y1="12" x2="13" y2="12" />
  <line x1="20" y1="18" x2="9" y2="18" />
  <path d="M4 8l4 4l-4 4" />
</svg>
));
IndentIncrease.displayName = 'IndentIncrease';
all['indent-increase'] = IndentIncrease;

export const Infinity = enhancerIcon('infinity', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828" />
</svg>
));
Infinity.displayName = 'Infinity';
all['infinity'] = Infinity;

export const InfoCircle = enhancerIcon('info-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="8" x2="12.01" y2="8" />
  <polyline points="11 12 12 12 12 16 13 16" />
</svg>
));
InfoCircle.displayName = 'InfoCircle';
all['info-circle'] = InfoCircle;

export const InfoSquare = enhancerIcon('info-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="8" x2="12.01" y2="8" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <polyline points="11 12 12 12 12 16 13 16" />
</svg>
));
InfoSquare.displayName = 'InfoSquare';
all['info-square'] = InfoSquare;

export const Italic = enhancerIcon('italic', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="11" y1="5" x2="17" y2="5" />
  <line x1="7" y1="19" x2="13" y2="19" />
  <line x1="14" y1="5" x2="10" y2="19" />
</svg>
));
Italic.displayName = 'Italic';
all['italic'] = Italic;

export const JumpRope = enhancerIcon('jump-rope', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" />
  <rect x="16" y="3" width="4" height="7" rx="2" />
  <rect x="4" y="14" width="4" height="7" rx="2" />
</svg>
));
JumpRope.displayName = 'JumpRope';
all['jump-rope'] = JumpRope;

export const Karate = enhancerIcon('karate', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="18" cy="4" r="1" />
  <path d="M3 9l4.5 1l3 2.5" />
  <path d="M13 21v-8l3 -5.5" />
  <path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" />
</svg>
));
Karate.displayName = 'Karate';
all['karate'] = Karate;

export const Key = enhancerIcon('key', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="8" cy="15" r="4" />
  <line x1="10.85" y1="12.15" x2="19" y2="4" />
  <line x1="18" y1="5" x2="20" y2="7" />
  <line x1="15" y1="8" x2="17" y2="10" />
</svg>
));
Key.displayName = 'Key';
all['key'] = Key;

export const KeyboardHide = enhancerIcon('keyboard-hide', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="2" y="3" width="20" height="12" rx="2" />
  <line x1="6" y1="7" x2="6" y2="7" />
  <line x1="10" y1="7" x2="10" y2="7" />
  <line x1="14" y1="7" x2="14" y2="7" />
  <line x1="18" y1="7" x2="18" y2="7" />
  <line x1="6" y1="11" x2="6" y2="11.01" />
  <line x1="18" y1="11" x2="18" y2="11.01" />
  <line x1="10" y1="11" x2="14" y2="11" />
  <path d="M10 21l2 -2l2 2" />
</svg>
));
KeyboardHide.displayName = 'KeyboardHide';
all['keyboard-hide'] = KeyboardHide;

export const KeyboardShow = enhancerIcon('keyboard-show', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="2" y="3" width="20" height="12" rx="2" />
  <line x1="6" y1="7" x2="6" y2="7" />
  <line x1="10" y1="7" x2="10" y2="7" />
  <line x1="14" y1="7" x2="14" y2="7" />
  <line x1="18" y1="7" x2="18" y2="7" />
  <line x1="6" y1="11" x2="6" y2="11.01" />
  <line x1="18" y1="11" x2="18" y2="11.01" />
  <line x1="10" y1="11" x2="14" y2="11" />
  <path d="M10 19l2 2l2 -2" />
</svg>
));
KeyboardShow.displayName = 'KeyboardShow';
all['keyboard-show'] = KeyboardShow;

export const Keyboard = enhancerIcon('keyboard', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="2" y="6" width="20" height="12" rx="2" />
  <line x1="6" y1="10" x2="6" y2="10" />
  <line x1="10" y1="10" x2="10" y2="10" />
  <line x1="14" y1="10" x2="14" y2="10" />
  <line x1="18" y1="10" x2="18" y2="10" />
  <line x1="6" y1="14" x2="6" y2="14.01" />
  <line x1="18" y1="14" x2="18" y2="14.01" />
  <line x1="10" y1="14" x2="14" y2="14" />
</svg>
));
Keyboard.displayName = 'Keyboard';
all['keyboard'] = Keyboard;

export const Language = enhancerIcon('language', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4" />
  <path d="M11 19l4 -9l4 9m-.9 -2h-6.2" />
</svg>
));
Language.displayName = 'Language';
all['language'] = Language;

export const LayersDifference = enhancerIcon('layers-difference', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
  <polyline points="10 8 8 8 8 10" />
  <polyline points="8 14 8 16 10 16" />
  <polyline points="14 8 16 8 16 10" />
  <polyline points="16 14 16 16 14 16" />
</svg>
));
LayersDifference.displayName = 'LayersDifference';
all['layers-difference'] = LayersDifference;

export const LayersIntersect = enhancerIcon('layers-intersect', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="8" y="4" width="12" height="12" rx="2" />
  <rect x="4" y="8" width="12" height="12" rx="2" />
</svg>
));
LayersIntersect.displayName = 'LayersIntersect';
all['layers-intersect'] = LayersIntersect;

export const LayersSubtract = enhancerIcon('layers-subtract', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="8" y="4" width="12" height="12" rx="2" />
  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
</svg>
));
LayersSubtract.displayName = 'LayersSubtract';
all['layers-subtract'] = LayersSubtract;

export const LayersUnion = enhancerIcon('layers-union', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
</svg>
));
LayersUnion.displayName = 'LayersUnion';
all['layers-union'] = LayersUnion;

export const Layout2 = enhancerIcon('layout-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="6" height="5" rx="2" />
  <rect x="4" y="13" width="6" height="7" rx="2" />
  <rect x="14" y="4" width="6" height="7" rx="2" />
  <rect x="14" y="15" width="6" height="5" rx="2" />
</svg>
));
Layout2.displayName = 'Layout2';
all['layout-2'] = Layout2;

export const LayoutAlignBottom = enhancerIcon('layout-align-bottom', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="20" y2="20" />
  <rect x="9" y="4" width="6" height="12" rx="2" />
</svg>
));
LayoutAlignBottom.displayName = 'LayoutAlignBottom';
all['layout-align-bottom'] = LayoutAlignBottom;

export const LayoutAlignCenter = enhancerIcon('layout-align-center', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="4" x2="12" y2="9" />
  <line x1="12" y1="15" x2="12" y2="20" />
  <rect x="6" y="9" width="12" height="6" rx="2" />
</svg>
));
LayoutAlignCenter.displayName = 'LayoutAlignCenter';
all['layout-align-center'] = LayoutAlignCenter;

export const LayoutAlignLeft = enhancerIcon('layout-align-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="4" x2="4" y2="20" />
  <rect x="8" y="9" width="12" height="6" rx="2" />
</svg>
));
LayoutAlignLeft.displayName = 'LayoutAlignLeft';
all['layout-align-left'] = LayoutAlignLeft;

export const LayoutAlignMiddle = enhancerIcon('layout-align-middle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="12" x2="9" y2="12" />
  <line x1="15" y1="12" x2="20" y2="12" />
  <rect x="9" y="6" width="6" height="12" rx="2" />
</svg>
));
LayoutAlignMiddle.displayName = 'LayoutAlignMiddle';
all['layout-align-middle'] = LayoutAlignMiddle;

export const LayoutAlignRight = enhancerIcon('layout-align-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="20" y1="4" x2="20" y2="20" />
  <rect x="4" y="9" width="12" height="6" rx="2" />
</svg>
));
LayoutAlignRight.displayName = 'LayoutAlignRight';
all['layout-align-right'] = LayoutAlignRight;

export const LayoutAlignTop = enhancerIcon('layout-align-top', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="4" x2="20" y2="4" />
  <rect x="9" y="8" width="6" height="12" rx="2" />
</svg>
));
LayoutAlignTop.displayName = 'LayoutAlignTop';
all['layout-align-top'] = LayoutAlignTop;

export const LayoutBottombar = enhancerIcon('layout-bottombar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="4" y1="15" x2="20" y2="15" />
</svg>
));
LayoutBottombar.displayName = 'LayoutBottombar';
all['layout-bottombar'] = LayoutBottombar;

export const LayoutCards = enhancerIcon('layout-cards', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="6" height="16" rx="2" />
  <rect x="14" y="4" width="6" height="10" rx="2" />
</svg>
));
LayoutCards.displayName = 'LayoutCards';
all['layout-cards'] = LayoutCards;

export const LayoutColumns = enhancerIcon('layout-columns', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="12" y1="4" x2="12" y2="20" />
</svg>
));
LayoutColumns.displayName = 'LayoutColumns';
all['layout-columns'] = LayoutColumns;

export const LayoutDistributeHorizontal = enhancerIcon('layout-distribute-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="4" x2="20" y2="4" />
  <line x1="4" y1="20" x2="20" y2="20" />
  <rect x="6" y="9" width="12" height="6" rx="2" />
</svg>
));
LayoutDistributeHorizontal.displayName = 'LayoutDistributeHorizontal';
all['layout-distribute-horizontal'] = LayoutDistributeHorizontal;

export const LayoutDistributeVertical = enhancerIcon('layout-distribute-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="4" x2="4" y2="20" />
  <line x1="20" y1="4" x2="20" y2="20" />
  <rect x="9" y="6" width="6" height="12" rx="2" />
</svg>
));
LayoutDistributeVertical.displayName = 'LayoutDistributeVertical';
all['layout-distribute-vertical'] = LayoutDistributeVertical;

export const LayoutGridAdd = enhancerIcon('layout-grid-add', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="6" height="6" rx="1" />
  <rect x="14" y="4" width="6" height="6" rx="1" />
  <rect x="4" y="14" width="6" height="6" rx="1" />
  <rect x="14" y="14" width="6" height="6" rx="1" />
</svg>
));
LayoutGridAdd.displayName = 'LayoutGridAdd';
all['layout-grid-add'] = LayoutGridAdd;

export const LayoutGrid = enhancerIcon('layout-grid', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="6" height="6" rx="1" />
  <rect x="14" y="4" width="6" height="6" rx="1" />
  <rect x="4" y="14" width="6" height="6" rx="1" />
  <rect x="14" y="14" width="6" height="6" rx="1" />
</svg>
));
LayoutGrid.displayName = 'LayoutGrid';
all['layout-grid'] = LayoutGrid;

export const LayoutKanban = enhancerIcon('layout-kanban', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="4" x2="10" y2="4" />
  <line x1="14" y1="4" x2="20" y2="4" />
  <rect x="4" y="8" width="6" height="12" rx="2" />
  <rect x="14" y="8" width="6" height="6" rx="2" />
</svg>
));
LayoutKanban.displayName = 'LayoutKanban';
all['layout-kanban'] = LayoutKanban;

export const LayoutList = enhancerIcon('layout-list', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="6" rx="2" />
  <rect x="4" y="14" width="16" height="6" rx="2" />
</svg>
));
LayoutList.displayName = 'LayoutList';
all['layout-list'] = LayoutList;

export const LayoutNavbar = enhancerIcon('layout-navbar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="4" y1="9" x2="20" y2="9" />
</svg>
));
LayoutNavbar.displayName = 'LayoutNavbar';
all['layout-navbar'] = LayoutNavbar;

export const LayoutRows = enhancerIcon('layout-rows', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="4" y1="12" x2="20" y2="12" />
</svg>
));
LayoutRows.displayName = 'LayoutRows';
all['layout-rows'] = LayoutRows;

export const LayoutSidebarRight = enhancerIcon('layout-sidebar-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="15" y1="4" x2="15" y2="20" />
</svg>
));
LayoutSidebarRight.displayName = 'LayoutSidebarRight';
all['layout-sidebar-right'] = LayoutSidebarRight;

export const LayoutSidebar = enhancerIcon('layout-sidebar', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="9" y1="4" x2="9" y2="20" />
</svg>
));
LayoutSidebar.displayName = 'LayoutSidebar';
all['layout-sidebar'] = LayoutSidebar;

export const Layout = enhancerIcon('layout', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="6" height="5" rx="2" />
  <rect x="4" y="13" width="6" height="7" rx="2" />
  <rect x="14" y="4" width="6" height="16" rx="2" />
</svg>
));
Layout.displayName = 'Layout';
all['layout'] = Layout;

export const Leaf = enhancerIcon('leaf', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
  <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
</svg>
));
Leaf.displayName = 'Leaf';
all['leaf'] = Leaf;

export const Lego = enhancerIcon('lego', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="9.5" y1="11" x2="9.51" y2="11" />
  <line x1="14.5" y1="11" x2="14.51" y2="11" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" />
</svg>
));
Lego.displayName = 'Lego';
all['lego'] = Lego;

export const LetterA = enhancerIcon('letter-a', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" />
  <line x1="7" y1="13" x2="17" y2="13" />
</svg>
));
LetterA.displayName = 'LetterA';
all['letter-a'] = LetterA;

export const LetterB = enhancerIcon('letter-b', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6" />
  <line x1="7" y1="12" x2="13" y2="12" />
</svg>
));
LetterB.displayName = 'LetterB';
all['letter-b'] = LetterB;

export const LetterC = enhancerIcon('letter-c', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5" />
</svg>
));
LetterC.displayName = 'LetterC';
all['letter-c'] = LetterC;

export const LetterD = enhancerIcon('letter-d', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1 -5 5h-6v-16" />
</svg>
));
LetterD.displayName = 'LetterD';
all['letter-d'] = LetterD;

export const LetterE = enhancerIcon('letter-e', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 4h-10v16h10" />
  <line x1="7" y1="12" x2="15" y2="12" />
</svg>
));
LetterE.displayName = 'LetterE';
all['letter-e'] = LetterE;

export const LetterF = enhancerIcon('letter-f', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 4h-10v16" />
  <line x1="7" y1="12" x2="15" y2="12" />
</svg>
));
LetterF.displayName = 'LetterF';
all['letter-f'] = LetterF;

export const LetterG = enhancerIcon('letter-g', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-2h-4" />
</svg>
));
LetterG.displayName = 'LetterG';
all['letter-g'] = LetterG;

export const LetterH = enhancerIcon('letter-h', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="17" y1="4" x2="17" y2="20" />
  <line x1="7" y1="12" x2="17" y2="12" />
  <line x1="7" y1="4" x2="7" y2="20" />
</svg>
));
LetterH.displayName = 'LetterH';
all['letter-h'] = LetterH;

export const LetterI = enhancerIcon('letter-i', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="4" x2="12" y2="20" />
</svg>
));
LetterI.displayName = 'LetterI';
all['letter-i'] = LetterI;

export const LetterJ = enhancerIcon('letter-j', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 4v12a4 4 0 0 1 -4 4h-2a4 4 0 0 1 -4 -4" />
</svg>
));
LetterJ.displayName = 'LetterJ';
all['letter-j'] = LetterJ;

export const LetterK = enhancerIcon('letter-k', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="4" x2="7" y2="20" />
  <path d="M7 12h2l8 -8" />
  <line x1="9" y1="12" x2="17" y2="20" />
</svg>
));
LetterK.displayName = 'LetterK';
all['letter-k'] = LetterK;

export const LetterL = enhancerIcon('letter-l', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4v16h10" />
</svg>
));
LetterL.displayName = 'LetterL';
all['letter-l'] = LetterL;

export const LetterM = enhancerIcon('letter-m', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 20v-16l6 14l6 -14v16" />
</svg>
));
LetterM.displayName = 'LetterM';
all['letter-m'] = LetterM;

export const LetterN = enhancerIcon('letter-n', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 20v-16l10 16v-16" />
</svg>
));
LetterN.displayName = 'LetterN';
all['letter-n'] = LetterN;

export const LetterO = enhancerIcon('letter-o', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6" />
</svg>
));
LetterO.displayName = 'LetterO';
all['letter-o'] = LetterO;

export const LetterP = enhancerIcon('letter-p', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
</svg>
));
LetterP.displayName = 'LetterP';
all['letter-p'] = LetterP;

export const LetterQ = enhancerIcon('letter-q', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6" />
  <line x1="13" y1="15" x2="18" y2="20" />
</svg>
));
LetterQ.displayName = 'LetterQ';
all['letter-q'] = LetterQ;

export const LetterR = enhancerIcon('letter-r', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
  <line x1="12" y1="13" x2="17" y2="20" />
</svg>
));
LetterR.displayName = 'LetterR';
all['letter-r'] = LetterR;

export const LetterS = enhancerIcon('letter-s', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 8a4 4 0 0 0 -4 -4h-2a4 4 0 0 0 0 8h2a4 4 0 0 1 0 8h-2a4 4 0 0 1 -4 -4" />
</svg>
));
LetterS.displayName = 'LetterS';
all['letter-s'] = LetterS;

export const LetterT = enhancerIcon('letter-t', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="4" x2="18" y2="4" />
  <line x1="12" y1="4" x2="12" y2="20" />
</svg>
));
LetterT.displayName = 'LetterT';
all['letter-t'] = LetterT;

export const LetterU = enhancerIcon('letter-u', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-11" />
</svg>
));
LetterU.displayName = 'LetterU';
all['letter-u'] = LetterU;

export const LetterV = enhancerIcon('letter-v', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 4l6 16l6 -16" />
</svg>
));
LetterV.displayName = 'LetterV';
all['letter-v'] = LetterV;

export const LetterW = enhancerIcon('letter-w', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4l4 16l4 -14l4 14l4 -16" />
</svg>
));
LetterW.displayName = 'LetterW';
all['letter-w'] = LetterW;

export const LetterX = enhancerIcon('letter-x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="7" y1="4" x2="17" y2="20" />
  <line x1="17" y1="4" x2="7" y2="20" />
</svg>
));
LetterX.displayName = 'LetterX';
all['letter-x'] = LetterX;

export const LetterY = enhancerIcon('letter-y', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4l5 9l5 -9" />
  <line x1="12" y1="13" x2="12" y2="20" />
</svg>
));
LetterY.displayName = 'LetterY';
all['letter-y'] = LetterY;

export const LetterZ = enhancerIcon('letter-z', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4h10l-10 16h10" />
</svg>
));
LetterZ.displayName = 'LetterZ';
all['letter-z'] = LetterZ;

export const LettersCase = enhancerIcon('letters-case', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="18" cy="16" r="3" />
  <line x1="21" y1="13" x2="21" y2="19" />
  <path d="M3 19v-10a4 4 0 0 1 4 -4a4 4 0 0 1 4 4v10" />
  <line x1="3" y1="13" x2="11" y2="13" />
</svg>
));
LettersCase.displayName = 'LettersCase';
all['letters-case'] = LettersCase;

export const License = enhancerIcon('license', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
  <line x1="9" y1="7" x2="13" y2="7" />
  <line x1="9" y1="11" x2="13" y2="11" />
</svg>
));
License.displayName = 'License';
all['license'] = License;

export const Lifebuoy = enhancerIcon('lifebuoy', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="4" />
  <circle cx="12" cy="12" r="9" />
  <line x1="15" y1="15" x2="18.35" y2="18.35" />
  <line x1="9" y1="15" x2="5.65" y2="18.35" />
  <line x1="5.65" y1="5.65" x2="9" y2="9" />
  <line x1="18.35" y1="5.65" x2="15" y2="9" />
</svg>
));
Lifebuoy.displayName = 'Lifebuoy';
all['lifebuoy'] = Lifebuoy;

export const LineHeight = enhancerIcon('line-height', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 8 6 5 9 8" />
  <polyline points="3 16 6 19 9 16" />
  <line x1="6" y1="5" x2="6" y2="19" />
  <line x1="13" y1="6" x2="20" y2="6" />
  <line x1="13" y1="12" x2="20" y2="12" />
  <line x1="13" y1="18" x2="20" y2="18" />
</svg>
));
LineHeight.displayName = 'LineHeight';
all['line-height'] = LineHeight;

export const Line = enhancerIcon('line', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="18" r="2" />
  <circle cx="18" cy="6" r="2" />
  <line x1="7.5" y1="16.5" x2="16.5" y2="7.5" />
</svg>
));
Line.displayName = 'Line';
all['line'] = Line;

export const Link = enhancerIcon('link', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
</svg>
));
Link.displayName = 'Link';
all['link'] = Link;

export const ListCheck = enhancerIcon('list-check', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
  <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
  <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
  <line x1="11" y1="6" x2="20" y2="6" />
  <line x1="11" y1="12" x2="20" y2="12" />
  <line x1="11" y1="18" x2="20" y2="18" />
</svg>
));
ListCheck.displayName = 'ListCheck';
all['list-check'] = ListCheck;

export const List = enhancerIcon('list', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="9" y1="6" x2="20" y2="6" />
  <line x1="9" y1="12" x2="20" y2="12" />
  <line x1="9" y1="18" x2="20" y2="18" />
  <line x1="5" y1="6" x2="5" y2="6.01" />
  <line x1="5" y1="12" x2="5" y2="12.01" />
  <line x1="5" y1="18" x2="5" y2="18.01" />
</svg>
));
List.displayName = 'List';
all['list'] = List;

export const LivePhoto = enhancerIcon('live-photo', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="12" r="5" />
  <line x1="15.9" y1="20.11" x2="15.9" y2="20.12" />
  <line x1="19.04" y1="17.61" x2="19.04" y2="17.62" />
  <line x1="20.77" y1="14" x2="20.77" y2="14.01" />
  <line x1="20.77" y1="10" x2="20.77" y2="10.01" />
  <line x1="19.04" y1="6.39" x2="19.04" y2="6.4" />
  <line x1="15.9" y1="3.89" x2="15.9" y2="3.9" />
  <line x1="12" y1="3" x2="12" y2="3.01" />
  <line x1="8.1" y1="3.89" x2="8.1" y2="3.9" />
  <line x1="4.96" y1="6.39" x2="4.96" y2="6.4" />
  <line x1="3.23" y1="10" x2="3.23" y2="10.01" />
  <line x1="3.23" y1="14" x2="3.23" y2="14.01" />
  <line x1="4.96" y1="17.61" x2="4.96" y2="17.62" />
  <line x1="8.1" y1="20.11" x2="8.1" y2="20.12" />
  <line x1="12" y1="21" x2="12" y2="21.01" />
</svg>
));
LivePhoto.displayName = 'LivePhoto';
all['live-photo'] = LivePhoto;

export const LiveView = enhancerIcon('live-view', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <line x1="12" y1="11" x2="12" y2="11.01" />
  <path d="M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
</svg>
));
LiveView.displayName = 'LiveView';
all['live-view'] = LiveView;

export const LoaderQuarter = enhancerIcon('loader-quarter', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="6" x2="12" y2="3" />
  <line x1="6" y1="12" x2="3" y2="12" />
  <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" />
</svg>
));
LoaderQuarter.displayName = 'LoaderQuarter';
all['loader-quarter'] = LoaderQuarter;

export const Loader = enhancerIcon('loader', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="6" x2="12" y2="3" />
  <line x1="16.25" y1="7.75" x2="18.4" y2="5.6" />
  <line x1="18" y1="12" x2="21" y2="12" />
  <line x1="16.25" y1="16.25" x2="18.4" y2="18.4" />
  <line x1="12" y1="18" x2="12" y2="21" />
  <line x1="7.75" y1="16.25" x2="5.6" y2="18.4" />
  <line x1="6" y1="12" x2="3" y2="12" />
  <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" />
</svg>
));
Loader.displayName = 'Loader';
all['loader'] = Loader;

export const Location = enhancerIcon('location', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
</svg>
));
Location.displayName = 'Location';
all['location'] = Location;

export const LockOff = enhancerIcon('lock-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4m4 0h2a2 2 0 0 1 2 2v2" />
  <circle cx="12" cy="16" r="1" />
  <path d="M8 11v-3m.712 -3.278a4 4 0 0 1 7.288 2.278v4" />
</svg>
));
LockOff.displayName = 'LockOff';
all['lock-off'] = LockOff;

export const LockOpen = enhancerIcon('lock-open', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="5" y="11" width="14" height="10" rx="2" />
  <circle cx="12" cy="16" r="1" />
  <path d="M8 11v-5a4 4 0 0 1 8 0" />
</svg>
));
LockOpen.displayName = 'LockOpen';
all['lock-open'] = LockOpen;

export const Lock = enhancerIcon('lock', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="5" y="11" width="14" height="10" rx="2" />
  <circle cx="12" cy="16" r="1" />
  <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
</svg>
));
Lock.displayName = 'Lock';
all['lock'] = Lock;

export const Login = enhancerIcon('login', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
  <path d="M20 12h-13l3 -3m0 6l-3 -3" />
</svg>
));
Login.displayName = 'Login';
all['login'] = Login;

export const Logout = enhancerIcon('logout', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
  <path d="M7 12h14l-3 -3m0 6l3 -3" />
</svg>
));
Logout.displayName = 'Logout';
all['logout'] = Logout;

export const Magnet = enhancerIcon('magnet', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 13v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a2 2 0 0 0 6 0v-8a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a8 8 0 0 1 -16 0" />
  <line x1="4" y1="8" x2="9" y2="8" />
  <line x1="15" y1="8" x2="19" y2="8" />
</svg>
));
Magnet.displayName = 'Magnet';
all['magnet'] = Magnet;

export const MailOpened = enhancerIcon('mail-opened', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 9 12 15 21 9 12 3 3 9" />
  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <line x1="3" y1="19" x2="9" y2="13" />
  <line x1="15" y1="13" x2="21" y2="19" />
</svg>
));
MailOpened.displayName = 'MailOpened';
all['mail-opened'] = MailOpened;

export const Mail = enhancerIcon('mail', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg>
));
Mail.displayName = 'Mail';
all['mail'] = Mail;

export const Man = enhancerIcon('man', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="5" r="2" />
  <path d="M10 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
</svg>
));
Man.displayName = 'Man';
all['man'] = Man;

export const ManualGearbox = enhancerIcon('manual-gearbox', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="6" r="2" />
  <circle cx="12" cy="6" r="2" />
  <circle cx="19" cy="6" r="2" />
  <circle cx="5" cy="18" r="2" />
  <circle cx="12" cy="18" r="2" />
  <line x1="5" y1="8" x2="5" y2="16" />
  <line x1="12" y1="8" x2="12" y2="16" />
  <path d="M19 8v2a2 2 0 0 1 -2 2h-12" />
</svg>
));
ManualGearbox.displayName = 'ManualGearbox';
all['manual-gearbox'] = ManualGearbox;

export const Map2 = enhancerIcon('map-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="18" y1="6" x2="18" y2="6.01" />
  <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
  <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
  <line x1="9" y1="4" x2="9" y2="17" />
  <line x1="15" y1="15" x2="15" y2="20" />
</svg>
));
Map2.displayName = 'Map2';
all['map-2'] = Map2;

export const MapPinOff = enhancerIcon('map-pin-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M9.44 9.435a3 3 0 0 0 4.126 4.124m1.434 -2.559a3 3 0 0 0 -3 -3" />
  <path d="M8.048 4.042a8 8 0 0 1 10.912 10.908m-1.8 2.206l-3.745 3.744a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 0 1 -.48 -10.79" />
</svg>
));
MapPinOff.displayName = 'MapPinOff';
all['map-pin-off'] = MapPinOff;

export const MapPin = enhancerIcon('map-pin', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="11" r="3" />
  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
</svg>
));
MapPin.displayName = 'MapPin';
all['map-pin'] = MapPin;

export const MapPins = enhancerIcon('map-pins', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
  <line x1="8" y1="7" x2="8" y2="7.01" />
  <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
  <line x1="16" y1="15" x2="16" y2="15.01" />
</svg>
));
MapPins.displayName = 'MapPins';
all['map-pins'] = MapPins;

export const Map = enhancerIcon('map', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7" />
  <line x1="9" y1="4" x2="9" y2="17" />
  <line x1="15" y1="7" x2="15" y2="20" />
</svg>
));
Map.displayName = 'Map';
all['map'] = Map;

export const Markdown = enhancerIcon('markdown', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="M7 15v-6l2 2l2 -2v6" />
  <path d="M14 13l2 2l2 -2m-2 2v-6" />
</svg>
));
Markdown.displayName = 'Markdown';
all['markdown'] = Markdown;

export const Marquee = enhancerIcon('marquee', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6a2 2 0 0 1 2 -2m3 0h1.5m3 0h1.5m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3v1.5m0 3a2 2 0 0 1 -2 2m-3 0h-1.5m-3 0h-1.5m-3 0a2 2 0 0 1 -2 -2m0 -3v-1.5m0 -3v-1.5m0 -3" />
</svg>
));
Marquee.displayName = 'Marquee';
all['marquee'] = Marquee;

export const Mars = enhancerIcon('mars', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="14" r="5" />
  <line x1="19" y1="5" x2="13.6" y2="10.4" />
  <line x1="19" y1="5" x2="14" y2="5" />
  <line x1="19" y1="5" x2="19" y2="10" />
</svg>
));
Mars.displayName = 'Mars';
all['mars'] = Mars;

export const Math = enhancerIcon('math', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 13l4 4m0 -4l-4 4" />
  <path d="M20 5h-7l-4 14l-3 -6h-2" />
</svg>
));
Math.displayName = 'Math';
all['math'] = Math;

export const Maximize = enhancerIcon('maximize', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
</svg>
));
Maximize.displayName = 'Maximize';
all['maximize'] = Maximize;

export const Medal = enhancerIcon('medal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 4v3m-4 -3v6m8 -6v6" />
  <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
</svg>
));
Medal.displayName = 'Medal';
all['medal'] = Medal;

export const MedicalCross = enhancerIcon('medical-cross', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 3a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1 -1.366 .366l-3.928 -2.269v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l3.928 2.267v-4.535a1 1 0 0 1 1 -1h2z" />
</svg>
));
MedicalCross.displayName = 'MedicalCross';
all['medical-cross'] = MedicalCross;

export const Menu2 = enhancerIcon('menu-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg>
));
Menu2.displayName = 'Menu2';
all['menu-2'] = Menu2;

export const Menu = enhancerIcon('menu', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="8" x2="20" y2="8" />
  <line x1="4" y1="16" x2="20" y2="16" />
</svg>
));
Menu.displayName = 'Menu';
all['menu'] = Menu;

export const Message2 = enhancerIcon('message-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
  <line x1="8" y1="9" x2="16" y2="9" />
  <line x1="8" y1="13" x2="14" y2="13" />
</svg>
));
Message2.displayName = 'Message2';
all['message-2'] = Message2;

export const MessageCircle2 = enhancerIcon('message-circle-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
</svg>
));
MessageCircle2.displayName = 'MessageCircle2';
all['message-circle-2'] = MessageCircle2;

export const MessageCircleOff = enhancerIcon('message-circle-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M8.585 4.581c3.225 -1.181 7.032 -.616 9.66 1.626c2.983 2.543 3.602 6.525 1.634 9.662m-1.908 2.108c-2.786 2.19 -6.89 2.665 -10.271 1.023l-4.7 1l1.3 -3.9c-2.237 -3.308 -1.489 -7.54 1.714 -10.084" />
</svg>
));
MessageCircleOff.displayName = 'MessageCircleOff';
all['message-circle-off'] = MessageCircleOff;

export const MessageCircle = enhancerIcon('message-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
  <line x1="8" y1="12" x2="8" y2="12.01" />
  <line x1="16" y1="12" x2="16" y2="12.01" />
</svg>
));
MessageCircle.displayName = 'MessageCircle';
all['message-circle'] = MessageCircle;

export const MessageDots = enhancerIcon('message-dots', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
  <line x1="12" y1="11" x2="12" y2="11.01" />
  <line x1="8" y1="11" x2="8" y2="11.01" />
  <line x1="16" y1="11" x2="16" y2="11.01" />
</svg>
));
MessageDots.displayName = 'MessageDots';
all['message-dots'] = MessageDots;

export const MessageOff = enhancerIcon('message-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M17 17h-9l-4 4v-13c0 -1.086 .577 -2.036 1.44 -2.563m3.561 -.437h8a3 3 0 0 1 3 3v6c0 .575 -.162 1.112 -.442 1.568" />
</svg>
));
MessageOff.displayName = 'MessageOff';
all['message-off'] = MessageOff;

export const MessagePlus = enhancerIcon('message-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
  <line x1="10" y1="11" x2="14" y2="11" />
  <line x1="12" y1="9" x2="12" y2="13" />
</svg>
));
MessagePlus.displayName = 'MessagePlus';
all['message-plus'] = MessagePlus;

export const MessageReport = enhancerIcon('message-report', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
  <line x1="12" y1="8" x2="12" y2="11" />
  <line x1="12" y1="14" x2="12" y2="14.01" />
</svg>
));
MessageReport.displayName = 'MessageReport';
all['message-report'] = MessageReport;

export const Message = enhancerIcon('message', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
  <line x1="8" y1="9" x2="16" y2="9" />
  <line x1="8" y1="13" x2="14" y2="13" />
</svg>
));
Message.displayName = 'Message';
all['message'] = Message;

export const MessagesOff = enhancerIcon('messages-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M11 11a1 1 0 0 1 -1 -1m0 -3.968v-2.032a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10l-3 -3h-3" />
  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
</svg>
));
MessagesOff.displayName = 'MessagesOff';
all['messages-off'] = MessagesOff;

export const Messages = enhancerIcon('messages', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
</svg>
));
Messages.displayName = 'Messages';
all['messages'] = Messages;

export const MicrophoneOff = enhancerIcon('microphone-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -.13 .874m-2 2a3 3 0 0 1 -3.87 -2.872v-1" />
  <path d="M5 10a7 7 0 0 0 10.846 5.85m2.002 -2a6.967 6.967 0 0 0 1.152 -3.85" />
  <line x1="8" y1="21" x2="16" y2="21" />
  <line x1="12" y1="17" x2="12" y2="21" />
</svg>
));
MicrophoneOff.displayName = 'MicrophoneOff';
all['microphone-off'] = MicrophoneOff;

export const Microphone = enhancerIcon('microphone', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="9" y="2" width="6" height="11" rx="3" />
  <path d="M5 10a7 7 0 0 0 14 0" />
  <line x1="8" y1="21" x2="16" y2="21" />
  <line x1="12" y1="17" x2="12" y2="21" />
</svg>
));
Microphone.displayName = 'Microphone';
all['microphone'] = Microphone;

export const Minimize = enhancerIcon('minimize', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
  <path d="M15 5v2a2 2 0 0 0 2 2h2" />
  <path d="M5 15h2a2 2 0 0 1 2 2v2" />
  <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
</svg>
));
Minimize.displayName = 'Minimize';
all['minimize'] = Minimize;

export const Minus = enhancerIcon('minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>
));
Minus.displayName = 'Minus';
all['minus'] = Minus;

export const Mist = enhancerIcon('mist', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 5h3m4 0h9" />
  <path d="M3 10h11m4 0h1" />
  <path d="M5 15h5m4 0h7" />
  <path d="M3 20h9m4 0h3" />
</svg>
));
Mist.displayName = 'Mist';
all['mist'] = Mist;

export const MoodBoy = enhancerIcon('mood-boy', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81" />
  <path d="M9.5 16a3.5 3.5 0 0 0 5 0" />
  <path d="M8.5 2c1.5 1 2.5 3.5 2.5 5" />
  <path d="M12.5 2c1.5 2 2 3.5 2 5" />
  <line x1="9" y1="12" x2="9.01" y2="12" />
  <line x1="15" y1="12" x2="15.01" y2="12" />
</svg>
));
MoodBoy.displayName = 'MoodBoy';
all['mood-boy'] = MoodBoy;

export const MoodConfuzed = enhancerIcon('mood-confuzed', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="10" x2="9.01" y2="10" />
  <line x1="15" y1="10" x2="15.01" y2="10" />
  <path d="M9.5 16a10 10 0 0 1 6 -1.5" />
</svg>
));
MoodConfuzed.displayName = 'MoodConfuzed';
all['mood-confuzed'] = MoodConfuzed;

export const MoodCrazyHappy = enhancerIcon('mood-crazy-happy', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="7" y1="8.5" x2="10" y2="11.5" />
  <path d="M7 11.5l3 -3" />
  <line x1="14" y1="8.5" x2="17" y2="11.5" />
  <path d="M14 11.5l3 -3" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
</svg>
));
MoodCrazyHappy.displayName = 'MoodCrazyHappy';
all['mood-crazy-happy'] = MoodCrazyHappy;

export const MoodCry = enhancerIcon('mood-cry', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="9" y1="10" x2="9.01" y2="10" />
  <line x1="15" y1="10" x2="15.01" y2="10" />
  <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
  <path d="M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z" />
  <path d="M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222" />
</svg>
));
MoodCry.displayName = 'MoodCry';
all['mood-cry'] = MoodCry;

export const MoodHappy = enhancerIcon('mood-happy', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="9" x2="9.01" y2="9" />
  <line x1="15" y1="9" x2="15.01" y2="9" />
  <path d="M8 13a4 4 0 1 0 8 0m0 0h-8" />
</svg>
));
MoodHappy.displayName = 'MoodHappy';
all['mood-happy'] = MoodHappy;

export const MoodKid = enhancerIcon('mood-kid', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="10" x2="9.01" y2="10" />
  <line x1="15" y1="10" x2="15.01" y2="10" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  <path d="M12 3a2 2 0 0 0 0 4" />
</svg>
));
MoodKid.displayName = 'MoodKid';
all['mood-kid'] = MoodKid;

export const MoodNeutral = enhancerIcon('mood-neutral', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="10" x2="9.01" y2="10" />
  <line x1="15" y1="10" x2="15.01" y2="10" />
  <line x1="9" y1="15" x2="15" y2="15" />
</svg>
));
MoodNeutral.displayName = 'MoodNeutral';
all['mood-neutral'] = MoodNeutral;

export const MoodSad = enhancerIcon('mood-sad', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="10" x2="9.01" y2="10" />
  <line x1="15" y1="10" x2="15.01" y2="10" />
  <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
</svg>
));
MoodSad.displayName = 'MoodSad';
all['mood-sad'] = MoodSad;

export const MoodSmile = enhancerIcon('mood-smile', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="10" x2="9.01" y2="10" />
  <line x1="15" y1="10" x2="15.01" y2="10" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
</svg>
));
MoodSmile.displayName = 'MoodSmile';
all['mood-smile'] = MoodSmile;

export const MoodSuprised = enhancerIcon('mood-suprised', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="9" x2="9.01" y2="9" />
  <line x1="15" y1="9" x2="15.01" y2="9" />
  <circle cx="12" cy="15" r="2" />
</svg>
));
MoodSuprised.displayName = 'MoodSuprised';
all['mood-suprised'] = MoodSuprised;

export const MoodTongue = enhancerIcon('mood-tongue', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="9" y1="10" x2="9.01" y2="10" />
  <line x1="15" y1="10" x2="15.01" y2="10" />
  <path d="M10 14v2a2 2 0 0 0 4 0v-2m1.5 0h-7" />
</svg>
));
MoodTongue.displayName = 'MoodTongue';
all['mood-tongue'] = MoodTongue;

export const Moon2 = enhancerIcon('moon-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16.418 4.157a8 8 0 0 0 0 15.686" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
Moon2.displayName = 'Moon2';
all['moon-2'] = Moon2;

export const MoonStars = enhancerIcon('moon-stars', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
  <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
  <path d="M19 11h2m-1 -1v2" />
</svg>
));
MoonStars.displayName = 'MoonStars';
all['moon-stars'] = MoonStars;

export const Moon = enhancerIcon('moon', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg>
));
Moon.displayName = 'Moon';
all['moon'] = Moon;

export const Moped = enhancerIcon('moped', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="18" cy="17" r="2" />
  <path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" />
  <line x1="6" y1="9" x2="9" y2="9" />
</svg>
));
Moped.displayName = 'Moped';
all['moped'] = Moped;

export const Mouse = enhancerIcon('mouse', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="7" y="4" width="10" height="16" rx="4" />
  <line x1="12" y1="8" x2="12" y2="11" />
</svg>
));
Mouse.displayName = 'Mouse';
all['mouse'] = Mouse;

export const Movie = enhancerIcon('movie', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="8" y1="4" x2="8" y2="20" />
  <line x1="16" y1="4" x2="16" y2="20" />
  <line x1="4" y1="8" x2="8" y2="8" />
  <line x1="4" y1="16" x2="8" y2="16" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="16" y1="8" x2="20" y2="8" />
  <line x1="16" y1="16" x2="20" y2="16" />
</svg>
));
Movie.displayName = 'Movie';
all['movie'] = Movie;

export const Mug = enhancerIcon('mug', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 6h10a1 1 0 0 1 1 1v8a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4v-8a1 1 0 0 1 1 -1" />
  <path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2" />
</svg>
));
Mug.displayName = 'Mug';
all['mug'] = Mug;

export const Music = enhancerIcon('music', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="17" r="3" />
  <circle cx="16" cy="17" r="3" />
  <polyline points="9 17 9 4 19 4 19 17" />
  <line x1="9" y1="8" x2="19" y2="8" />
</svg>
));
Music.displayName = 'Music';
all['music'] = Music;

export const NewSection = enhancerIcon('new-section', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="9" y1="12" x2="15" y2="12" />
  <line x1="12" y1="9" x2="12" y2="15" />
  <path d="M4 6v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1m-5 0h-2m-5 0h-1a1 1 0 0 1 -1 -1v-1m0 -5v-2m0 -5" />
</svg>
));
NewSection.displayName = 'NewSection';
all['new-section'] = NewSection;

export const News = enhancerIcon('news', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
  <line x1="8" y1="8" x2="12" y2="8" />
  <line x1="8" y1="12" x2="12" y2="12" />
  <line x1="8" y1="16" x2="12" y2="16" />
</svg>
));
News.displayName = 'News';
all['news'] = News;

export const Note = enhancerIcon('note', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="13" y1="20" x2="20" y2="13" />
  <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7" />
</svg>
));
Note.displayName = 'Note';
all['note'] = Note;

export const Notebook = enhancerIcon('notebook', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
  <line x1="13" y1="8" x2="15" y2="8" />
  <line x1="13" y1="12" x2="15" y2="12" />
</svg>
));
Notebook.displayName = 'Notebook';
all['notebook'] = Notebook;

export const Notes = enhancerIcon('notes', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="5" y="3" width="14" height="18" rx="2" />
  <line x1="9" y1="7" x2="15" y2="7" />
  <line x1="9" y1="11" x2="15" y2="11" />
  <line x1="9" y1="15" x2="13" y2="15" />
</svg>
));
Notes.displayName = 'Notes';
all['notes'] = Notes;

export const Notification = enhancerIcon('notification', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
  <circle cx="17" cy="7" r="3" />
</svg>
));
Notification.displayName = 'Notification';
all['notification'] = Notification;

export const Octagon = enhancerIcon('octagon', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8.7 3h6.6c.3 0 .5 .1 .7 .3l4.7 4.7c.2 .2 .3 .4 .3 .7v6.6c0 .3 -.1 .5 -.3 .7l-4.7 4.7c-.2 .2 -.4 .3 -.7 .3h-6.6c-.3 0 -.5 -.1 -.7 -.3l-4.7 -4.7c-.2 -.2 -.3 -.4 -.3 -.7v-6.6c0 -.3 .1 -.5 .3 -.7l4.7 -4.7c.2 -.2 .4 -.3 .7 -.3z" />
</svg>
));
Octagon.displayName = 'Octagon';
all['octagon'] = Octagon;

export const Omega = enhancerIcon('omega', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 19h5v-1a7.35 7.35 0 1 1 6 0v1h5" />
</svg>
));
Omega.displayName = 'Omega';
all['omega'] = Omega;

export const Outlet = enhancerIcon('outlet', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <circle cx="9" cy="12" r=".5" fill="currentColor" />
  <circle cx="15" cy="12" r=".5" fill="currentColor" />
</svg>
));
Outlet.displayName = 'Outlet';
all['outlet'] = Outlet;

export const Package = enhancerIcon('package', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
  <line x1="12" y1="12" x2="20" y2="7.5" />
  <line x1="12" y1="12" x2="12" y2="21" />
  <line x1="12" y1="12" x2="4" y2="7.5" />
  <line x1="16" y1="5.25" x2="8" y2="9.75" />
</svg>
));
Package.displayName = 'Package';
all['package'] = Package;

export const PageBreak = enhancerIcon('page-break', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M19 18v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1" />
  <path d="M3 14h3m4.5 0h3m4.5 0h3" />
  <path d="M5 10v-5a2 2 0 0 1 2 -2h7l5 5v2" />
</svg>
));
PageBreak.displayName = 'PageBreak';
all['page-break'] = PageBreak;

export const Paint = enhancerIcon('paint', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="5" y="3" width="14" height="6" rx="2" />
  <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />
  <rect x="10" y="15" width="4" height="6" rx="1" />
</svg>
));
Paint.displayName = 'Paint';
all['paint'] = Paint;

export const Palette = enhancerIcon('palette', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
  <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
  <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
  <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
</svg>
));
Palette.displayName = 'Palette';
all['palette'] = Palette;

export const PanoramaHorizontal = enhancerIcon('panorama-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4.338 5.53c5.106 1.932 10.211 1.932 15.317 .002a1 1 0 0 1 1.345 .934v11c0 .692 -.692 1.2 -1.34 .962c-5.107 -1.932 -10.214 -1.932 -15.321 0c-.648 .246 -1.339 -.242 -1.339 -.935v-11.027a1 1 0 0 1 1.338 -.935z" />
</svg>
));
PanoramaHorizontal.displayName = 'PanoramaHorizontal';
all['panorama-horizontal'] = PanoramaHorizontal;

export const PanoramaVertical = enhancerIcon('panorama-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18.463 4.338c-1.932 5.106 -1.932 10.211 0 15.317a1 1 0 0 1 -.934 1.345h-11c-.692 0 -1.208 -.692 -.962 -1.34c1.932 -5.107 1.932 -10.214 0 -15.321c-.246 -.648 .243 -1.339 .935 -1.339h11.028c.693 0 1.18 .691 .935 1.338z" />
</svg>
));
PanoramaVertical.displayName = 'PanoramaVertical';
all['panorama-vertical'] = PanoramaVertical;

export const Paperclip = enhancerIcon('paperclip', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
</svg>
));
Paperclip.displayName = 'Paperclip';
all['paperclip'] = Paperclip;

export const Parachute = enhancerIcon('parachute', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 12a10 10 0 1 0 -20 0" />
  <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
  <path d="M2 12l10 10l-3.5 -10" />
  <path d="M15.5 12l-3.5 10l10 -10" />
</svg>
));
Parachute.displayName = 'Parachute';
all['parachute'] = Parachute;

export const Parentheses = enhancerIcon('parentheses', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4a12.25 12.25 0 0 0 0 16" />
  <path d="M17 4a12.25 12.25 0 0 1 0 16" />
</svg>
));
Parentheses.displayName = 'Parentheses';
all['parentheses'] = Parentheses;

export const Parking = enhancerIcon('parking', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M9 16v-8h4a2 2 0 0 1 0 4h-4" />
</svg>
));
Parking.displayName = 'Parking';
all['parking'] = Parking;

export const Peace = enhancerIcon('peace', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="3" x2="12" y2="21" />
  <line x1="12" y1="12" x2="18.3" y2="18.3" />
  <line x1="12" y1="12" x2="5.7" y2="18.3" />
</svg>
));
Peace.displayName = 'Peace';
all['peace'] = Peace;

export const Pencil = enhancerIcon('pencil', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
</svg>
));
Pencil.displayName = 'Pencil';
all['pencil'] = Pencil;

export const Pennant = enhancerIcon('pennant', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="8" y1="21" x2="12" y2="21" />
  <line x1="10" y1="21" x2="10" y2="3" />
  <path d="M10 4l9 4l-9 4" />
</svg>
));
Pennant.displayName = 'Pennant';
all['pennant'] = Pennant;

export const Percentage = enhancerIcon('percentage', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="17" cy="17" r="1" />
  <circle cx="7" cy="7" r="1" />
  <line x1="6" y1="18" x2="18" y2="6" />
</svg>
));
Percentage.displayName = 'Percentage';
all['percentage'] = Percentage;

export const PhoneCall = enhancerIcon('phone-call', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <path d="M15 7a2 2 0 0 1 2 2" />
  <path d="M15 3a6 6 0 0 1 6 6" />
</svg>
));
PhoneCall.displayName = 'PhoneCall';
all['phone-call'] = PhoneCall;

export const PhoneCalling = enhancerIcon('phone-calling', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <line x1="15" y1="7" x2="15" y2="7.01" />
  <line x1="18" y1="7" x2="18" y2="7.01" />
  <line x1="21" y1="7" x2="21" y2="7.01" />
</svg>
));
PhoneCalling.displayName = 'PhoneCalling';
all['phone-calling'] = PhoneCalling;

export const PhoneCheck = enhancerIcon('phone-check', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <path d="M15 6l2 2l4 -4" />
</svg>
));
PhoneCheck.displayName = 'PhoneCheck';
all['phone-check'] = PhoneCheck;

export const PhoneIncoming = enhancerIcon('phone-incoming', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <line x1="15" y1="9" x2="20" y2="4" />
  <polyline points="15 5 15 9 19 9" />
</svg>
));
PhoneIncoming.displayName = 'PhoneIncoming';
all['phone-incoming'] = PhoneIncoming;

export const PhoneOff = enhancerIcon('phone-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="21" x2="21" y2="3" />
  <path d="M5.831 14.161a15.946 15.946 0 0 1 -2.831 -8.161a2 2 0 0 1 2 -2h4l2 5l-2.5 1.5c.108 .22 .223 .435 .345 .645m1.751 2.277c.843 .84 1.822 1.544 2.904 2.078l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a15.963 15.963 0 0 1 -10.344 -4.657" />
</svg>
));
PhoneOff.displayName = 'PhoneOff';
all['phone-off'] = PhoneOff;

export const PhoneOutgoing = enhancerIcon('phone-outgoing', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <line x1="15" y1="9" x2="20" y2="4" />
  <polyline points="16 4 20 4 20 8" />
</svg>
));
PhoneOutgoing.displayName = 'PhoneOutgoing';
all['phone-outgoing'] = PhoneOutgoing;

export const PhonePause = enhancerIcon('phone-pause', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <line x1="20" y1="3" x2="20" y2="7" />
  <line x1="16" y1="3" x2="16" y2="7" />
</svg>
));
PhonePause.displayName = 'PhonePause';
all['phone-pause'] = PhonePause;

export const PhonePlus = enhancerIcon('phone-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <path d="M15 6h6m-3 -3v6" />
</svg>
));
PhonePlus.displayName = 'PhonePlus';
all['phone-plus'] = PhonePlus;

export const PhoneX = enhancerIcon('phone-x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <path d="M16 4l4 4m0 -4l-4 4" />
</svg>
));
PhoneX.displayName = 'PhoneX';
all['phone-x'] = PhoneX;

export const Phone = enhancerIcon('phone', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
</svg>
));
Phone.displayName = 'Phone';
all['phone'] = Phone;

export const PhotoOff = enhancerIcon('photo-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <line x1="15" y1="8" x2="15.01" y2="8" />
  <path d="M19.121 19.122a3 3 0 0 1 -2.121 .878h-10a3 3 0 0 1 -3 -3v-10c0 -.833 .34 -1.587 .888 -2.131m3.112 -.869h9a3 3 0 0 1 3 3v9" />
  <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M16.32 12.34c.577 -.059 1.162 .162 1.68 .66l2 2" />
</svg>
));
PhotoOff.displayName = 'PhotoOff';
all['photo-off'] = PhotoOff;

export const Photo = enhancerIcon('photo', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="15" y1="8" x2="15.01" y2="8" />
  <rect x="4" y="4" width="16" height="16" rx="3" />
  <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
  <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
</svg>
));
Photo.displayName = 'Photo';
all['photo'] = Photo;

export const PictureInPictureOff = enhancerIcon('picture-in-picture-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
  <rect x="14" y="14" width="7" height="5" rx="1" />
  <line x1="7" y1="9" x2="11" y2="13" />
  <path d="M7 12v-3h3" />
</svg>
));
PictureInPictureOff.displayName = 'PictureInPictureOff';
all['picture-in-picture-off'] = PictureInPictureOff;

export const PictureInPictureOn = enhancerIcon('picture-in-picture-on', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
  <rect x="14" y="14" width="7" height="5" rx="1" />
  <line x1="7" y1="9" x2="11" y2="13" />
  <path d="M8 13h3v-3" />
</svg>
));
PictureInPictureOn.displayName = 'PictureInPictureOn';
all['picture-in-picture-on'] = PictureInPictureOn;

export const PictureInPicture = enhancerIcon('picture-in-picture', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
  <rect x="14" y="14" width="7" height="5" rx="1" />
</svg>
));
PictureInPicture.displayName = 'PictureInPicture';
all['picture-in-picture'] = PictureInPicture;

export const Pill = enhancerIcon('pill', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
  <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
</svg>
));
Pill.displayName = 'Pill';
all['pill'] = Pill;

export const Pin = enhancerIcon('pin', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
  <line x1="9" y1="15" x2="4.5" y2="19.5" />
  <line x1="14.5" y1="4" x2="20" y2="9.5" />
</svg>
));
Pin.displayName = 'Pin';
all['pin'] = Pin;

export const PinnedOff = enhancerIcon('pinned-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251" />
  <line x1="9" y1="15" x2="4.5" y2="19.5" />
  <line x1="14.5" y1="4" x2="20" y2="9.5" />
</svg>
));
PinnedOff.displayName = 'PinnedOff';
all['pinned-off'] = PinnedOff;

export const Pinned = enhancerIcon('pinned', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
  <line x1="12" y1="16" x2="12" y2="21" />
  <line x1="8" y1="4" x2="16" y2="4" />
</svg>
));
Pinned.displayName = 'Pinned';
all['pinned'] = Pinned;

export const Pizza = enhancerIcon('pizza', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" />
  <path d="M5.2 15.772a14.939 14.939 0 0 0 6.995 1.728a14.944 14.944 0 0 0 6.638 -1.545" />
  <line x1="13" y1="11.01" x2="13" y2="11" />
  <line x1="11" y1="14" x2="11" y2="13.99" />
</svg>
));
Pizza.displayName = 'Pizza';
all['pizza'] = Pizza;

export const PlaneArrival = enhancerIcon('plane-arrival', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(15 12 12) translate(0 -1)" />
  <line x1="3" y1="21" x2="21" y2="21" />
</svg>
));
PlaneArrival.displayName = 'PlaneArrival';
all['plane-arrival'] = PlaneArrival;

export const PlaneDeparture = enhancerIcon('plane-departure', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />
  <line x1="3" y1="21" x2="21" y2="21" />
</svg>
));
PlaneDeparture.displayName = 'PlaneDeparture';
all['plane-departure'] = PlaneDeparture;

export const Plane = enhancerIcon('plane', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
</svg>
));
Plane.displayName = 'Plane';
all['plane'] = Plane;

export const Planet = enhancerIcon('planet', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805" />
  <circle cx="12" cy="12" r="7" />
</svg>
));
Planet.displayName = 'Planet';
all['planet'] = Planet;

export const Plant2 = enhancerIcon('plant-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M2 9a10 10 0 1 0 20 0" />
  <path d="M12 19a10 10 0 0 1 10 -10" />
  <path d="M2 9a10 10 0 0 1 10 10" />
  <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
  <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
</svg>
));
Plant2.displayName = 'Plant2';
all['plant-2'] = Plant2;

export const Plant = enhancerIcon('plant', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
  <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
  <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
  <line x1="12" y1="15" x2="12" y2="9" />
</svg>
));
Plant.displayName = 'Plant';
all['plant'] = Plant;

export const PlayerPause = enhancerIcon('player-pause', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="6" y="5" width="4" height="14" rx="1" />
  <rect x="14" y="5" width="4" height="14" rx="1" />
</svg>
));
PlayerPause.displayName = 'PlayerPause';
all['player-pause'] = PlayerPause;

export const PlayerPlay = enhancerIcon('player-play', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 4v16l13 -8z" />
</svg>
));
PlayerPlay.displayName = 'PlayerPlay';
all['player-play'] = PlayerPlay;

export const PlayerRecord = enhancerIcon('player-record', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="7" />
</svg>
));
PlayerRecord.displayName = 'PlayerRecord';
all['player-record'] = PlayerRecord;

export const PlayerSkipBack = enhancerIcon('player-skip-back', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 5v14l-12 -7z" />
  <line x1="4" y1="5" x2="4" y2="19" />
</svg>
));
PlayerSkipBack.displayName = 'PlayerSkipBack';
all['player-skip-back'] = PlayerSkipBack;

export const PlayerSkipForward = enhancerIcon('player-skip-forward', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 5v14l12 -7z" />
  <line x1="20" y1="5" x2="20" y2="19" />
</svg>
));
PlayerSkipForward.displayName = 'PlayerSkipForward';
all['player-skip-forward'] = PlayerSkipForward;

export const PlayerStop = enhancerIcon('player-stop', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="5" y="5" width="14" height="14" rx="2" />
</svg>
));
PlayerStop.displayName = 'PlayerStop';
all['player-stop'] = PlayerStop;

export const PlayerTrackNext = enhancerIcon('player-track-next', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 5v14l8 -7z" />
  <path d="M14 5v14l8 -7z" />
</svg>
));
PlayerTrackNext.displayName = 'PlayerTrackNext';
all['player-track-next'] = PlayerTrackNext;

export const PlayerTrackPrev = enhancerIcon('player-track-prev', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 5v14l-8 -7z" />
  <path d="M10 5v14l-8 -7z" />
</svg>
));
PlayerTrackPrev.displayName = 'PlayerTrackPrev';
all['player-track-prev'] = PlayerTrackPrev;

export const Plug = enhancerIcon('plug', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 7h10v6a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-6" />
  <line x1="9" y1="3" x2="9" y2="7" />
  <line x1="15" y1="3" x2="15" y2="7" />
  <path d="M12 16v2a2 2 0 0 0 2 2h3" />
</svg>
));
Plug.displayName = 'Plug';
all['plug'] = Plug;

export const Plus = enhancerIcon('plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>
));
Plus.displayName = 'Plus';
all['plus'] = Plus;

export const Point = enhancerIcon('point', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="4" />
</svg>
));
Point.displayName = 'Point';
all['point'] = Point;

export const Pool = enhancerIcon('pool', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
  <path d="M2 16a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
  <path d="M15 12v-7.5a1.5 1.5 0 0 1 3 0" />
  <path d="M9 12v-7.5a1.5 1.5 0 0 0 -3 0" />
  <line x1="15" y1="5" x2="9" y2="5" />
  <line x1="9" y1="10" x2="15" y2="10" />
</svg>
));
Pool.displayName = 'Pool';
all['pool'] = Pool;

export const Power = enhancerIcon('power', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 6a7.75 7.75 0 1 0 10 0" />
  <line x1="12" y1="4" x2="12" y2="12" />
</svg>
));
Power.displayName = 'Power';
all['power'] = Power;

export const Pray = enhancerIcon('pray', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="5" r="1" />
  <path d="M7 20h8l-4 -4v-7l4 3l2 -2" />
</svg>
));
Pray.displayName = 'Pray';
all['pray'] = Pray;

export const Presentation = enhancerIcon('presentation', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="4" x2="21" y2="4" />
  <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
  <line x1="12" y1="16" x2="12" y2="20" />
  <line x1="9" y1="20" x2="15" y2="20" />
  <path d="M8 12l3 -3l2 2l3 -3" />
</svg>
));
Presentation.displayName = 'Presentation';
all['presentation'] = Presentation;

export const Printer = enhancerIcon('printer', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
  <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
  <rect x="7" y="13" width="10" height="8" rx="2" />
</svg>
));
Printer.displayName = 'Printer';
all['printer'] = Printer;

export const Prompt = enhancerIcon('prompt', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="5 7 10 12 5 17" />
  <line x1="13" y1="17" x2="19" y2="17" />
</svg>
));
Prompt.displayName = 'Prompt';
all['prompt'] = Prompt;

export const Puzzle = enhancerIcon('puzzle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
</svg>
));
Puzzle.displayName = 'Puzzle';
all['puzzle'] = Puzzle;

export const Qrcode = enhancerIcon('qrcode', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="6" height="6" rx="1" />
  <line x1="7" y1="17" x2="7" y2="17.01" />
  <rect x="14" y="4" width="6" height="6" rx="1" />
  <line x1="7" y1="7" x2="7" y2="7.01" />
  <rect x="4" y="14" width="6" height="6" rx="1" />
  <line x1="17" y1="7" x2="17" y2="7.01" />
  <line x1="14" y1="14" x2="17" y2="14" />
  <line x1="20" y1="14" x2="20" y2="14.01" />
  <line x1="14" y1="14" x2="14" y2="17" />
  <line x1="14" y1="20" x2="17" y2="20" />
  <line x1="17" y1="17" x2="20" y2="17" />
  <line x1="20" y1="17" x2="20" y2="20" />
</svg>
));
Qrcode.displayName = 'Qrcode';
all['qrcode'] = Qrcode;

export const QuestionMark = enhancerIcon('question-mark', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
  <line x1="12" y1="19" x2="12" y2="19.01" />
</svg>
));
QuestionMark.displayName = 'QuestionMark';
all['question-mark'] = QuestionMark;

export const Radioactive = enhancerIcon('radioactive', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6" />
  <path d="M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0" />
  <path d="M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6" />
</svg>
));
Radioactive.displayName = 'Radioactive';
all['radioactive'] = Radioactive;

export const Rainbow = enhancerIcon('rainbow', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10" />
  <path d="M18 17a6 6 0 1 0 -12 0" />
  <path d="M14 17a2 2 0 1 0 -4 0" />
</svg>
));
Rainbow.displayName = 'Rainbow';
all['rainbow'] = Rainbow;

export const ReceiptTax = enhancerIcon('receipt-tax', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="9" y1="14" x2="15" y2="8" />
  <circle cx="9.5" cy="8.5" r=".5" fill="currentColor" />
  <circle cx="14.5" cy="13.5" r=".5" fill="currentColor" />
  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
</svg>
));
ReceiptTax.displayName = 'ReceiptTax';
all['receipt-tax'] = ReceiptTax;

export const RecordMail = enhancerIcon('record-mail', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="12" r="3" />
  <circle cx="17" cy="12" r="3" />
  <line x1="7" y1="15" x2="17" y2="15" />
</svg>
));
RecordMail.displayName = 'RecordMail';
all['record-mail'] = RecordMail;

export const RectangleVertical = enhancerIcon('rectangle-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="5" y="3" width="14" height="18" rx="2" />
</svg>
));
RectangleVertical.displayName = 'RectangleVertical';
all['rectangle-vertical'] = RectangleVertical;

export const Rectangle = enhancerIcon('rectangle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
</svg>
));
Rectangle.displayName = 'Rectangle';
all['rectangle'] = Rectangle;

export const Recycle = enhancerIcon('recycle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
  <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" transform="rotate(120 12 13)" />
  <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" transform="rotate(240 12 13)" />
</svg>
));
Recycle.displayName = 'Recycle';
all['recycle'] = Recycle;

export const RefreshAlert = enhancerIcon('refresh-alert', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
  <line x1="12" y1="9" x2="12" y2="12" />
  <line x1="12" y1="15" x2="12.01" y2="15" />
</svg>
));
RefreshAlert.displayName = 'RefreshAlert';
all['refresh-alert'] = RefreshAlert;

export const Refresh = enhancerIcon('refresh', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
</svg>
));
Refresh.displayName = 'Refresh';
all['refresh'] = Refresh;

export const Registered = enhancerIcon('registered', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M9 16v-8h4a2 2 0 0 1 0 4h-4m3 0l3 4" />
</svg>
));
Registered.displayName = 'Registered';
all['registered'] = Registered;

export const RelationManyToMany = enhancerIcon('relation-many-to-many', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="M15 14v-4l3 4v-4" />
  <path d="M6 14v-4l3 4v-4" />
  <line x1="12" y1="10.5" x2="12" y2="10.51" />
  <line x1="12" y1="13.5" x2="12" y2="13.51" />
</svg>
));
RelationManyToMany.displayName = 'RelationManyToMany';
all['relation-many-to-many'] = RelationManyToMany;

export const RelationOneToMany = enhancerIcon('relation-one-to-many', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="M7 10h1v4" />
  <path d="M14 14v-4l3 4v-4" />
  <line x1="11" y1="10.5" x2="11" y2="10.51" />
  <line x1="11" y1="13.5" x2="11" y2="13.51" />
</svg>
));
RelationOneToMany.displayName = 'RelationOneToMany';
all['relation-one-to-many'] = RelationOneToMany;

export const RelationOneToOne = enhancerIcon('relation-one-to-one', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="M8 10h1v4" />
  <path d="M15 10h1v4" />
  <line x1="12" y1="10.5" x2="12" y2="10.51" />
  <line x1="12" y1="13.5" x2="12" y2="13.51" />
</svg>
));
RelationOneToOne.displayName = 'RelationOneToOne';
all['relation-one-to-one'] = RelationOneToOne;

export const RepeatOnce = enhancerIcon('repeat-once', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
  <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
  <path d="M11 11l1 -1v4" />
</svg>
));
RepeatOnce.displayName = 'RepeatOnce';
all['repeat-once'] = RepeatOnce;

export const Repeat = enhancerIcon('repeat', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
  <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
</svg>
));
Repeat.displayName = 'Repeat';
all['repeat'] = Repeat;

export const Replace = enhancerIcon('replace', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="3" width="6" height="6" rx="1" />
  <rect x="15" y="15" width="6" height="6" rx="1" />
  <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
  <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
</svg>
));
Replace.displayName = 'Replace';
all['replace'] = Replace;

export const Ripple = enhancerIcon('ripple', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" />
  <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" />
  <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" />
</svg>
));
Ripple.displayName = 'Ripple';
all['ripple'] = Ripple;

export const RoadSign = enhancerIcon('road-sign', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z" />
  <path d="M9 14v-2c0 -.59 .414 -1 1 -1h5" />
  <path d="M13 9l2 2l-2 2" />
</svg>
));
RoadSign.displayName = 'RoadSign';
all['road-sign'] = RoadSign;

export const Rocket = enhancerIcon('rocket', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
  <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
  <circle cx="15" cy="9" r="1" />
</svg>
));
Rocket.displayName = 'Rocket';
all['rocket'] = Rocket;

export const Rotate2 = enhancerIcon('rotate-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
  <line x1="18.37" y1="7.16" x2="18.37" y2="7.17" />
  <line x1="13" y1="19.94" x2="13" y2="19.95" />
  <line x1="16.84" y1="18.37" x2="16.84" y2="18.38" />
  <line x1="19.37" y1="15.1" x2="19.37" y2="15.11" />
  <line x1="19.94" y1="11" x2="19.94" y2="11.01" />
</svg>
));
Rotate2.displayName = 'Rotate2';
all['rotate-2'] = Rotate2;

export const RotateClockwise2 = enhancerIcon('rotate-clockwise-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
  <line x1="5.63" y1="7.16" x2="5.63" y2="7.17" />
  <line x1="4.06" y1="11" x2="4.06" y2="11.01" />
  <line x1="4.63" y1="15.1" x2="4.63" y2="15.11" />
  <line x1="7.16" y1="18.37" x2="7.16" y2="18.38" />
  <line x1="11" y1="19.94" x2="11" y2="19.95" />
</svg>
));
RotateClockwise2.displayName = 'RotateClockwise2';
all['rotate-clockwise-2'] = RotateClockwise2;

export const RotateClockwise = enhancerIcon('rotate-clockwise', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
</svg>
));
RotateClockwise.displayName = 'RotateClockwise';
all['rotate-clockwise'] = RotateClockwise;

export const RotateRectangle = enhancerIcon('rotate-rectangle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16.3 5h.7a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h5l-2.82 -2.82m0 5.64l2.82 -2.82" transform="rotate(-45 12 12)" />
</svg>
));
RotateRectangle.displayName = 'RotateRectangle';
all['rotate-rectangle'] = RotateRectangle;

export const Rotate = enhancerIcon('rotate', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
</svg>
));
Rotate.displayName = 'Rotate';
all['rotate'] = Rotate;

export const Route = enhancerIcon('route', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="19" r="2" />
  <circle cx="18" cy="5" r="2" />
  <path d="M12 19h4.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h3.5" />
</svg>
));
Route.displayName = 'Route';
all['route'] = Route;

export const Router = enhancerIcon('router', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="13" width="18" height="8" rx="2" />
  <line x1="17" y1="17" x2="17" y2="17.01" />
  <line x1="13" y1="17" x2="13" y2="17.01" />
  <line x1="15" y1="13" x2="15" y2="11" />
  <path d="M11.75 8.75a4 4 0 0 1 6.5 0" />
  <path d="M8.5 6.5a8 8 0 0 1 13 0" />
</svg>
));
Router.displayName = 'Router';
all['router'] = Router;

export const Rss = enhancerIcon('rss', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="19" r="1" />
  <path d="M4 4a16 16 0 0 1 16 16" />
  <path d="M4 11a9 9 0 0 1 9 9" />
</svg>
));
Rss.displayName = 'Rss';
all['rss'] = Rss;

export const Ruler = enhancerIcon('ruler', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
  <line x1="4" y1="8" x2="6" y2="8" />
  <line x1="4" y1="12" x2="7" y2="12" />
  <line x1="4" y1="16" x2="6" y2="16" />
  <line x1="8" y1="4" x2="8" y2="6" />
  <polyline points="12 4 12 7 " />
  <polyline points="16 4 16 6 " />
</svg>
));
Ruler.displayName = 'Ruler';
all['ruler'] = Ruler;

export const Run = enhancerIcon('run', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="13" cy="4" r="1" />
  <path d="M4 17l5 1l.75 -1.5" />
  <path d="M15 21l0 -4l-4 -3l1 -6" />
  <path d="M7 12l0 -3l5 -1l3 3l3 1" />
</svg>
));
Run.displayName = 'Run';
all['run'] = Run;

export const Sailboat = enhancerIcon('sailboat', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
  <path d="M4 18l-1 -3h18l-1 3" />
  <path d="M11 12h7l-7 -9v9" />
  <line x1="8" y1="7" x2="6" y2="12" />
</svg>
));
Sailboat.displayName = 'Sailboat';
all['sailboat'] = Sailboat;

export const Scale = enhancerIcon('scale', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="3" x2="12" y2="21" />
  <line x1="9" y1="21" x2="15" y2="21" />
  <polyline points="3 6 6 7 12 5 18 7 21 6" />
  <path d="M6 7l-3 9a5 5 0 0 0 6 0l-3 -9" />
  <path d="M18 7l-3 9a5 5 0 0 0 6 0l-3 -9" />
</svg>
));
Scale.displayName = 'Scale';
all['scale'] = Scale;

export const Scan = enhancerIcon('scan', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
  <path d="M4 17v1a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v1" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>
));
Scan.displayName = 'Scan';
all['scan'] = Scan;

export const School = enhancerIcon('school', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
</svg>
));
School.displayName = 'School';
all['school'] = School;

export const Scissors = enhancerIcon('scissors', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="7" r="3" />
  <circle cx="6" cy="17" r="3" />
  <line x1="8.6" y1="8.6" x2="19" y2="19" />
  <line x1="8.6" y1="15.4" x2="19" y2="5" />
</svg>
));
Scissors.displayName = 'Scissors';
all['scissors'] = Scissors;

export const ScooterElectric = enhancerIcon('scooter-electric', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="18" cy="17" r="2" />
  <circle cx="6" cy="17" r="2" />
  <path d="M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1" />
  <path d="M10 4l-2 4h3l-2 4" />
</svg>
));
ScooterElectric.displayName = 'ScooterElectric';
all['scooter-electric'] = ScooterElectric;

export const Scooter = enhancerIcon('scooter', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="18" cy="17" r="2" />
  <circle cx="6" cy="17" r="2" />
  <path d="M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1" />
</svg>
));
Scooter.displayName = 'Scooter';
all['scooter'] = Scooter;

export const ScreenShareOff = enhancerIcon('screen-share-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
  <line x1="7" y1="20" x2="17" y2="20" />
  <line x1="9" y1="16" x2="9" y2="20" />
  <line x1="15" y1="16" x2="15" y2="20" />
  <path d="M17 8l4 -4m-4 0l4 4" />
</svg>
));
ScreenShareOff.displayName = 'ScreenShareOff';
all['screen-share-off'] = ScreenShareOff;

export const ScreenShare = enhancerIcon('screen-share', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
  <line x1="7" y1="20" x2="17" y2="20" />
  <line x1="9" y1="16" x2="9" y2="20" />
  <line x1="15" y1="16" x2="15" y2="20" />
  <path d="M17 4h4v4" />
  <path d="M16 9l5 -5" />
</svg>
));
ScreenShare.displayName = 'ScreenShare';
all['screen-share'] = ScreenShare;

export const Search = enhancerIcon('search', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>
));
Search.displayName = 'Search';
all['search'] = Search;

export const Seeding = enhancerIcon('seeding', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
  <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
  <line x1="12" y1="20" x2="12" y2="10" />
</svg>
));
Seeding.displayName = 'Seeding';
all['seeding'] = Seeding;

export const Select = enhancerIcon('select', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M9 11l3 3l3 -3" />
</svg>
));
Select.displayName = 'Select';
all['select'] = Select;

export const Selector = enhancerIcon('selector', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="8 9 12 5 16 9" />
  <polyline points="16 15 12 19 8 15" />
</svg>
));
Selector.displayName = 'Selector';
all['selector'] = Selector;

export const Send = enhancerIcon('send', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="10" y1="14" x2="21" y2="3" />
  <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
</svg>
));
Send.displayName = 'Send';
all['send'] = Send;

export const SeparatorHorizontal = enhancerIcon('separator-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="12" x2="20" y2="12" />
  <polyline points="8 8 12 4 16 8" />
  <polyline points="16 16 12 20 8 16" />
</svg>
));
SeparatorHorizontal.displayName = 'SeparatorHorizontal';
all['separator-horizontal'] = SeparatorHorizontal;

export const SeparatorVertical = enhancerIcon('separator-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="4" x2="12" y2="20" />
  <polyline points="8 8 4 12 8 16" />
  <polyline points="16 16 20 12 16 8" />
</svg>
));
SeparatorVertical.displayName = 'SeparatorVertical';
all['separator-vertical'] = SeparatorVertical;

export const Separator = enhancerIcon('separator', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="12" x2="3" y2="12.01" />
  <line x1="7" y1="12" x2="17" y2="12" />
  <line x1="21" y1="12" x2="21" y2="12.01" />
</svg>
));
Separator.displayName = 'Separator';
all['separator'] = Separator;

export const Server = enhancerIcon('server', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="4" width="18" height="8" rx="3" />
  <rect x="3" y="12" width="18" height="8" rx="3" />
  <line x1="7" y1="8" x2="7" y2="8.01" />
  <line x1="7" y1="16" x2="7" y2="16.01" />
</svg>
));
Server.displayName = 'Server';
all['server'] = Server;

export const Servicemark = enhancerIcon('servicemark', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M13 15v-6l3 4l3 -4v6" />
</svg>
));
Servicemark.displayName = 'Servicemark';
all['servicemark'] = Servicemark;

export const Settings = enhancerIcon('settings', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
  <circle cx="12" cy="12" r="3" />
</svg>
));
Settings.displayName = 'Settings';
all['settings'] = Settings;

export const Shape = enhancerIcon('shape', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="5" r="2" />
  <circle cx="19" cy="5" r="2" />
  <circle cx="5" cy="19" r="2" />
  <circle cx="19" cy="19" r="2" />
  <line x1="5" y1="7" x2="5" y2="17" />
  <line x1="7" y1="5" x2="17" y2="5" />
  <line x1="7" y1="19" x2="17" y2="19" />
  <line x1="19" y1="7" x2="19" y2="17" />
</svg>
));
Shape.displayName = 'Shape';
all['shape'] = Shape;

export const Share = enhancerIcon('share', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="6" r="3" />
  <circle cx="18" cy="18" r="3" />
  <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
  <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
</svg>
));
Share.displayName = 'Share';
all['share'] = Share;

export const ShieldCheck = enhancerIcon('shield-check', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 12l2 2l4 -4" />
  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
</svg>
));
ShieldCheck.displayName = 'ShieldCheck';
all['shield-check'] = ShieldCheck;

export const ShieldLock = enhancerIcon('shield-lock', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  <circle cx="12" cy="11" r="1" />
  <line x1="12" y1="12" x2="12" y2="14.5" />
</svg>
));
ShieldLock.displayName = 'ShieldLock';
all['shield-lock'] = ShieldLock;

export const ShieldOff = enhancerIcon('shield-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M17.669 17.669a12 12 0 0 1 -5.669 3.331a12 12 0 0 1 -8.5 -15c.797 .036 1.589 0 2.366 -.126m3.092 -.912a12 12 0 0 0 3.042 -1.962a12 12 0 0 0 8.5 3a12 12 0 0 1 -1.117 9.379" />
</svg>
));
ShieldOff.displayName = 'ShieldOff';
all['shield-off'] = ShieldOff;

export const ShieldX = enhancerIcon('shield-x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  <path d="M10 10l4 4m0 -4l-4 4" />
</svg>
));
ShieldX.displayName = 'ShieldX';
all['shield-x'] = ShieldX;

export const Shield = enhancerIcon('shield', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
</svg>
));
Shield.displayName = 'Shield';
all['shield'] = Shield;

export const Ship = enhancerIcon('ship', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
  <path d="M4 18l-1 -5h18l-2 4" />
  <path d="M5 13v-6h8l4 6" />
  <path d="M7 7v-4h-1" />
</svg>
));
Ship.displayName = 'Ship';
all['ship'] = Ship;

export const Shirt = enhancerIcon('shirt', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
</svg>
));
Shirt.displayName = 'Shirt';
all['shirt'] = Shirt;

export const ShoppingCart = enhancerIcon('shopping-cart', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="19" r="2" />
  <circle cx="17" cy="19" r="2" />
  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
</svg>
));
ShoppingCart.displayName = 'ShoppingCart';
all['shopping-cart'] = ShoppingCart;

export const Sitemap = enhancerIcon('sitemap', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="15" width="6" height="6" rx="2" />
  <rect x="15" y="15" width="6" height="6" rx="2" />
  <rect x="9" y="3" width="6" height="6" rx="2" />
  <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
  <line x1="12" y1="9" x2="12" y2="12" />
</svg>
));
Sitemap.displayName = 'Sitemap';
all['sitemap'] = Sitemap;

export const Skateboard = enhancerIcon('skateboard', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="15" r="2" />
  <circle cx="17" cy="15" r="2" />
  <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
</svg>
));
Skateboard.displayName = 'Skateboard';
all['skateboard'] = Skateboard;

export const Slice = enhancerIcon('slice', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" />
</svg>
));
Slice.displayName = 'Slice';
all['slice'] = Slice;

export const Slideshow = enhancerIcon('slideshow', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="15" y1="6" x2="15.01" y2="6" />
  <rect x="3" y="3" width="18" height="14" rx="3" />
  <path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" />
  <path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" />
  <line x1="8" y1="21" x2="8.01" y2="21" />
  <line x1="12" y1="21" x2="12.01" y2="21" />
  <line x1="16" y1="21" x2="16.01" y2="21" />
</svg>
));
Slideshow.displayName = 'Slideshow';
all['slideshow'] = Slideshow;

export const SmartHome = enhancerIcon('smart-home', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
  <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
</svg>
));
SmartHome.displayName = 'SmartHome';
all['smart-home'] = SmartHome;

export const SmokingNo = enhancerIcon('smoking-no', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="8" y1="13" x2="8" y2="17" />
  <path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9" />
</svg>
));
SmokingNo.displayName = 'SmokingNo';
all['smoking-no'] = SmokingNo;

export const Smoking = enhancerIcon('smoking', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="13" width="18" height="4" rx="1" />
  <line x1="8" y1="13" x2="8" y2="17" />
  <path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
</svg>
));
Smoking.displayName = 'Smoking';
all['smoking'] = Smoking;

export const Snowflake = enhancerIcon('snowflake', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />
  <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(60 12 12)" />
  <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(120 12 12)" />
  <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(180 12 12)" />
  <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(240 12 12)" />
  <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(300 12 12)" />
</svg>
));
Snowflake.displayName = 'Snowflake';
all['snowflake'] = Snowflake;

export const SoccerField = enhancerIcon('soccer-field', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="3" />
  <path d="M3 9h3v6h-3z" />
  <path d="M18 9h3v6h-3z" />
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <line x1="12" y1="5" x2="12" y2="19" />
</svg>
));
SoccerField.displayName = 'SoccerField';
all['soccer-field'] = SoccerField;

export const Social = enhancerIcon('social', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="5" r="2" />
  <circle cx="5" cy="19" r="2" />
  <circle cx="19" cy="19" r="2" />
  <circle cx="12" cy="14" r="3" />
  <line x1="12" y1="7" x2="12" y2="11" />
  <line x1="6.7" y1="17.8" x2="9.5" y2="15.8" />
  <line x1="17.3" y1="17.8" x2="14.5" y2="15.8" />
</svg>
));
Social.displayName = 'Social';
all['social'] = Social;

export const SortAscending = enhancerIcon('sort-ascending', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="11" y2="6" />
  <line x1="4" y1="12" x2="11" y2="12" />
  <line x1="4" y1="18" x2="13" y2="18" />
  <polyline points="15 9 18 6 21 9" />
  <line x1="18" y1="6" x2="18" y2="18" />
</svg>
));
SortAscending.displayName = 'SortAscending';
all['sort-ascending'] = SortAscending;

export const SortDescending = enhancerIcon('sort-descending', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="13" y2="6" />
  <line x1="4" y1="12" x2="11" y2="12" />
  <line x1="4" y1="18" x2="11" y2="18" />
  <polyline points="15 15 18 18 21 15" />
  <line x1="18" y1="6" x2="18" y2="18" />
</svg>
));
SortDescending.displayName = 'SortDescending';
all['sort-descending'] = SortDescending;

export const Space = enhancerIcon('space', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 10v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-3" />
</svg>
));
Space.displayName = 'Space';
all['space'] = Space;

export const Speakerphone = enhancerIcon('speakerphone', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 8a3 3 0 0 1 0 6" />
  <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
  <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
</svg>
));
Speakerphone.displayName = 'Speakerphone';
all['speakerphone'] = Speakerphone;

export const Speedboat = enhancerIcon('speedboat', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 17h13.4a3 3 0 0 0 2.5 -1.34l3.1 -4.66h0h-6.23a4 4 0 0 0 -1.49 .29l-3.56 1.42a4 4 0 0 1 -1.49 .29h-3.73h0h-1l-1.5 4z" />
  <line x1="6" y1="13" x2="7.5" y2="8" />
  <path d="M6 8h8l2 3" />
</svg>
));
Speedboat.displayName = 'Speedboat';
all['speedboat'] = Speedboat;

export const SquareCheck = enhancerIcon('square-check', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M9 12l2 2l4 -4" />
</svg>
));
SquareCheck.displayName = 'SquareCheck';
all['square-check'] = SquareCheck;

export const SquareDot = enhancerIcon('square-dot', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <circle cx="12" cy="12" r="1" />
</svg>
));
SquareDot.displayName = 'SquareDot';
all['square-dot'] = SquareDot;

export const SquareForbid2 = enhancerIcon('square-forbid-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="9" y1="15" x2="15" y2="9" />
</svg>
));
SquareForbid2.displayName = 'SquareForbid2';
all['square-forbid-2'] = SquareForbid2;

export const SquareForbid = enhancerIcon('square-forbid', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="9" y1="9" x2="15" y2="15" />
</svg>
));
SquareForbid.displayName = 'SquareForbid';
all['square-forbid'] = SquareForbid;

export const SquareMinus = enhancerIcon('square-minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="9" y1="12" x2="15" y2="12" />
</svg>
));
SquareMinus.displayName = 'SquareMinus';
all['square-minus'] = SquareMinus;

export const SquarePlus = enhancerIcon('square-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="9" y1="12" x2="15" y2="12" />
  <line x1="12" y1="9" x2="12" y2="15" />
</svg>
));
SquarePlus.displayName = 'SquarePlus';
all['square-plus'] = SquarePlus;

export const SquareRotated = enhancerIcon('square-rotated', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z" />
</svg>
));
SquareRotated.displayName = 'SquareRotated';
all['square-rotated'] = SquareRotated;

export const SquareX = enhancerIcon('square-x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M10 10l4 4m0 -4l-4 4" />
</svg>
));
SquareX.displayName = 'SquareX';
all['square-x'] = SquareX;

export const Square = enhancerIcon('square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
</svg>
));
Square.displayName = 'Square';
all['square'] = Square;

export const Stack = enhancerIcon('stack', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="12 4 4 8 12 12 20 8 12 4" />
  <polyline points="4 12 12 16 20 12" />
  <polyline points="4 16 12 20 20 16" />
</svg>
));
Stack.displayName = 'Stack';
all['stack'] = Stack;

export const StairsDown = enhancerIcon('stairs-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4v-4h4v-4h4v-4h4" />
  <path d="M11 4l-7 7v-4m4 4h-4" />
</svg>
));
StairsDown.displayName = 'StairsDown';
all['stairs-down'] = StairsDown;

export const StairsUp = enhancerIcon('stairs-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h4v-4h4v-4h4v-4h4" />
  <path d="M4 11l7 -7v4m-4 -4h4" />
</svg>
));
StairsUp.displayName = 'StairsUp';
all['stairs-up'] = StairsUp;

export const Stairs = enhancerIcon('stairs', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 18h4v-4h4v-4h4v-4h4" />
</svg>
));
Stairs.displayName = 'Stairs';
all['stairs'] = Stairs;

export const StarHalf = enhancerIcon('star-half', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253z" />
</svg>
));
StarHalf.displayName = 'StarHalf';
all['star-half'] = StarHalf;

export const StarOff = enhancerIcon('star-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M10.012 6.016l1.981 -4.014l3.086 6.253l6.9 1l-4.421 4.304m.012 4.01l.588 3.426l-6.158 -3.245l-6.172 3.245l1.179 -6.873l-5 -4.867l6.327 -.917" />
</svg>
));
StarOff.displayName = 'StarOff';
all['star-off'] = StarOff;

export const Star = enhancerIcon('star', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg>
));
Star.displayName = 'Star';
all['star'] = Star;

export const Stars = enhancerIcon('stars', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17.8 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
  <path d="M6.2 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
  <path d="M12 9.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
</svg>
));
Stars.displayName = 'Stars';
all['stars'] = Stars;

export const SteeringWheel = enhancerIcon('steering-wheel', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <circle cx="12" cy="12" r="2" />
  <line x1="12" y1="14" x2="12" y2="21" />
  <line x1="10" y1="12" x2="3.25" y2="10" />
  <line x1="14" y1="12" x2="20.75" y2="10" />
</svg>
));
SteeringWheel.displayName = 'SteeringWheel';
all['steering-wheel'] = SteeringWheel;

export const StepInto = enhancerIcon('step-into', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="3" x2="12" y2="15" />
  <line x1="16" y1="11" x2="12" y2="15" />
  <line x1="8" y1="11" x2="12" y2="15" />
  <circle cx="12" cy="20" r="1" />
</svg>
));
StepInto.displayName = 'StepInto';
all['step-into'] = StepInto;

export const StepOut = enhancerIcon('step-out', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="3" x2="12" y2="15" />
  <line x1="16" y1="7" x2="12" y2="3" />
  <line x1="8" y1="7" x2="12" y2="3" />
  <circle cx="12" cy="20" r="1" />
</svg>
));
StepOut.displayName = 'StepOut';
all['step-out'] = StepOut;

export const Stethoscope = enhancerIcon('stethoscope', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
  <path d="M8 15a6 6 0 1 0 12 0v-3" />
  <path  d="M11 3v2" />
  <path  d="M6 3v2" />
  <circle cx="20" cy="10" r="2" />
</svg>
));
Stethoscope.displayName = 'Stethoscope';
all['stethoscope'] = Stethoscope;

export const Sticker = enhancerIcon('sticker', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8" />
  <path d="M20 12a8 8 0 1 1 -8 -8" />
</svg>
));
Sticker.displayName = 'Sticker';
all['sticker'] = Sticker;

export const Strikethrough = enhancerIcon('strikethrough', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7" />
  <path d="M16.5 16a3.5 3.5 0 0 1 -3.5 3h-1.5a4 2 0 0 1 -4 -1.5" />
</svg>
));
Strikethrough.displayName = 'Strikethrough';
all['strikethrough'] = Strikethrough;

export const Submarine = enhancerIcon('submarine', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10h0l-3 1.5l-1 -1.5h-2z" />
  <path d="M17 11l-1 -3h-5l-1 3" />
  <path d="M13 8v-2a1 1 0 0 1 1 -1h1" />
</svg>
));
Submarine.displayName = 'Submarine';
all['submarine'] = Submarine;

export const Subscript = enhancerIcon('subscript', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 7l8 10m-8 0l8 -10" />
  <path d="M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
</svg>
));
Subscript.displayName = 'Subscript';
all['subscript'] = Subscript;

export const Subtask = enhancerIcon('subtask', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="9" x2="12" y2="9" />
  <line x1="4" y1="5" x2="8" y2="5" />
  <path d="M6 5v11a1 1 0 0 0 1 1h5" />
  <rect x="12" y="7" width="8" height="4" rx="1" />
  <rect x="12" y="15" width="8" height="4" rx="1" />
</svg>
));
Subtask.displayName = 'Subtask';
all['subtask'] = Subtask;

export const Sum = enhancerIcon('sum', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" />
</svg>
));
Sum.displayName = 'Sum';
all['sum'] = Sum;

export const SunOff = enhancerIcon('sun-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M16 12a4 4 0 0 0 -4 -4m-2.834 1.177a4 4 0 0 0 5.66 5.654" />
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
</svg>
));
SunOff.displayName = 'SunOff';
all['sun-off'] = SunOff;

export const Sun = enhancerIcon('sun', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="4" />
  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
</svg>
));
Sun.displayName = 'Sun';
all['sun'] = Sun;

export const Sunset = enhancerIcon('sunset', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
  <line x1="3" y1="21" x2="21" y2="21" />
  <path d="M12 9v-6l3 3m-6 0l3 -3" />
</svg>
));
Sunset.displayName = 'Sunset';
all['sunset'] = Sunset;

export const Sunshine = enhancerIcon('sunshine', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
  <line x1="3" y1="21" x2="21" y2="21" />
  <path d="M12 3v6l3 -3m-6 0l3 3" />
</svg>
));
Sunshine.displayName = 'Sunshine';
all['sunshine'] = Sunshine;

export const Superscript = enhancerIcon('superscript', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 7l8 10m-8 0l8 -10" />
  <path d="M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
</svg>
));
Superscript.displayName = 'Superscript';
all['superscript'] = Superscript;

export const Swimming = enhancerIcon('swimming', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="16" cy="9" r="1" />
  <path d="M6 11l4 -2l3.5 3l-1.5 2" />
  <path d="M3 16.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25" />
</svg>
));
Swimming.displayName = 'Swimming';
all['swimming'] = Swimming;

export const Switch2 = enhancerIcon('switch-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" />
  <path d="M18 4l3 3l-3 3" />
  <path d="M3 7h5l7 10h6" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>
));
Switch2.displayName = 'Switch2';
all['switch-2'] = Switch2;

export const Switch3 = enhancerIcon('switch-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 17h2.397a5 5 0 0 0 4.096 -2.133l.177 -.253m3.66 -5.227l.177 -.254a5 5 0 0 1 4.096 -2.133h3.397" />
  <path d="M18 4l3 3l-3 3" />
  <path d="M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397" />
  <path d="M18 20l3 -3l-3 -3" />
</svg>
));
Switch3.displayName = 'Switch3';
all['switch-3'] = Switch3;

export const SwitchHorizontal = enhancerIcon('switch-horizontal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="16 3 20 7 16 11" />
  <line x1="10" y1="7" x2="20" y2="7" />
  <polyline points="8 13 4 17 8 21" />
  <line x1="4" y1="17" x2="13" y2="17" />
</svg>
));
SwitchHorizontal.displayName = 'SwitchHorizontal';
all['switch-horizontal'] = SwitchHorizontal;

export const SwitchVertical = enhancerIcon('switch-vertical', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 8 7 4 11 8" />
  <line x1="7" y1="4" x2="7" y2="13" />
  <polyline points="13 16 17 20 21 16" />
  <line x1="17" y1="10" x2="17" y2="20" />
</svg>
));
SwitchVertical.displayName = 'SwitchVertical';
all['switch-vertical'] = SwitchVertical;

export const Switch = enhancerIcon('switch', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="15 4 19 4 19 8" />
  <line x1="14.75" y1="9.25" x2="19" y2="4" />
  <line x1="5" y1="19" x2="9" y2="15" />
  <polyline points="15 19 19 19 19 15" />
  <line x1="5" y1="5" x2="19" y2="19" />
</svg>
));
Switch.displayName = 'Switch';
all['switch'] = Switch;

export const Table = enhancerIcon('table', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="4" y1="10" x2="20" y2="10" />
  <line x1="10" y1="4" x2="10" y2="20" />
</svg>
));
Table.displayName = 'Table';
all['table'] = Table;

export const Tag = enhancerIcon('tag', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 3l9 9a1.5 1.5 0 0 1 0 2l-6 6a1.5 1.5 0 0 1 -2 0l-9 -9v-4a4 4 0 0 1 4 -4h4" />
  <circle cx="9" cy="9" r="2" />
</svg>
));
Tag.displayName = 'Tag';
all['tag'] = Tag;

export const Tallymark1 = enhancerIcon('tallymark-1', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
</svg>
));
Tallymark1.displayName = 'Tallymark1';
all['tallymark-1'] = Tallymark1;

export const Tallymark2 = enhancerIcon('tallymark-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="10" y1="5" x2="10" y2="19" />
  <line x1="14" y1="5" x2="14" y2="19" />
</svg>
));
Tallymark2.displayName = 'Tallymark2';
all['tallymark-2'] = Tallymark2;

export const Tallymark3 = enhancerIcon('tallymark-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="8" y1="5" x2="8" y2="19" />
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="16" y1="5" x2="16" y2="19" />
</svg>
));
Tallymark3.displayName = 'Tallymark3';
all['tallymark-3'] = Tallymark3;

export const Tallymark4 = enhancerIcon('tallymark-4', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="5" x2="6" y2="19" />
  <line x1="10" y1="5" x2="10" y2="19" />
  <line x1="14" y1="5" x2="14" y2="19" />
  <line x1="18" y1="5" x2="18" y2="19" />
</svg>
));
Tallymark4.displayName = 'Tallymark4';
all['tallymark-4'] = Tallymark4;

export const Tallymarks = enhancerIcon('tallymarks', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="5" x2="6" y2="19" />
  <line x1="10" y1="5" x2="10" y2="19" />
  <line x1="14" y1="5" x2="14" y2="19" />
  <line x1="18" y1="5" x2="18" y2="19" />
  <line x1="3" y1="17" x2="21" y2="7" />
</svg>
));
Tallymarks.displayName = 'Tallymarks';
all['tallymarks'] = Tallymarks;

export const Tank = enhancerIcon('tank', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="2" y="12" width="18" height="6" rx="3" />
  <path d="M6 12l1 -5h5l3 5" />
  <line x1="21" y1="9" x2="13.2" y2="9" />
</svg>
));
Tank.displayName = 'Tank';
all['tank'] = Tank;

export const Target = enhancerIcon('target', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="12" r="5" />
  <circle cx="12" cy="12" r="9" />
</svg>
));
Target.displayName = 'Target';
all['target'] = Target;

export const TemperatureCelsius = enhancerIcon('temperature-celsius', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="8" r="2" />
  <path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3" />
</svg>
));
TemperatureCelsius.displayName = 'TemperatureCelsius';
all['temperature-celsius'] = TemperatureCelsius;

export const TemperatureFahrenheit = enhancerIcon('temperature-fahrenheit', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="8" r="2" />
  <line x1="13" y1="12" x2="18" y2="12" />
  <path d="M20 6h-6a1 1 0 0 0 -1 1v11" />
</svg>
));
TemperatureFahrenheit.displayName = 'TemperatureFahrenheit';
all['temperature-fahrenheit'] = TemperatureFahrenheit;

export const TemperatureMinus = enhancerIcon('temperature-minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
  <line x1="8" y1="9" x2="12" y2="9" />
  <line x1="16" y1="9" x2="22" y2="9" />
</svg>
));
TemperatureMinus.displayName = 'TemperatureMinus';
all['temperature-minus'] = TemperatureMinus;

export const TemperaturePlus = enhancerIcon('temperature-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
  <line x1="8" y1="9" x2="12" y2="9" />
  <line x1="16" y1="9" x2="22" y2="9" />
  <line x1="19" y1="6" x2="19" y2="12" />
</svg>
));
TemperaturePlus.displayName = 'TemperaturePlus';
all['temperature-plus'] = TemperaturePlus;

export const Temperature = enhancerIcon('temperature', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
  <line x1="10" y1="9" x2="14" y2="9" />
</svg>
));
Temperature.displayName = 'Temperature';
all['temperature'] = Temperature;

export const Template = enhancerIcon('template', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="4" rx="1" />
  <rect x="4" y="12" width="6" height="8" rx="1" />
  <line x1="14" y1="12" x2="20" y2="12" />
  <line x1="14" y1="16" x2="20" y2="16" />
  <line x1="14" y1="20" x2="20" y2="20" />
</svg>
));
Template.displayName = 'Template';
all['template'] = Template;

export const Terminal2 = enhancerIcon('terminal-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9l3 3l-3 3" />
  <line x1="13" y1="15" x2="16" y2="15" />
  <rect x="3" y="4" width="18" height="16" rx="2" />
</svg>
));
Terminal2.displayName = 'Terminal2';
all['terminal-2'] = Terminal2;

export const Terminal = enhancerIcon('terminal', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 7l5 5l-5 5" />
  <line x1="12" y1="19" x2="19" y2="19" />
</svg>
));
Terminal.displayName = 'Terminal';
all['terminal'] = Terminal;

export const TestPipe = enhancerIcon('test-pipe', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M16 4l3 3l-12.35 12.35a1.5 1.5 0 0 1 -3 -3l12.35 -12.35" />
  <line x1="10" y1="10" x2="16" y2="10" />
  <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6" />
</svg>
));
TestPipe.displayName = 'TestPipe';
all['test-pipe'] = TestPipe;

export const TextWrapDisabled = enhancerIcon('text-wrap-disabled', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="14" y2="6" />
  <line x1="4" y1="18" x2="14" y2="18" />
  <path d="M4 12h17l-3 -3m0 6l3 -3" />
</svg>
));
TextWrapDisabled.displayName = 'TextWrapDisabled';
all['text-wrap-disabled'] = TextWrapDisabled;

export const TextWrap = enhancerIcon('text-wrap', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="18" x2="9" y2="18" />
  <path d="M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2" />
</svg>
));
TextWrap.displayName = 'TextWrap';
all['text-wrap'] = TextWrap;

export const ThumbDown = enhancerIcon('thumb-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
</svg>
));
ThumbDown.displayName = 'ThumbDown';
all['thumb-down'] = ThumbDown;

export const ThumbUp = enhancerIcon('thumb-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
</svg>
));
ThumbUp.displayName = 'ThumbUp';
all['thumb-up'] = ThumbUp;

export const Ticket = enhancerIcon('ticket', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="15" y1="5" x2="15" y2="7" />
  <line x1="15" y1="11" x2="15" y2="13" />
  <line x1="15" y1="17" x2="15" y2="19" />
  <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
</svg>
));
Ticket.displayName = 'Ticket';
all['ticket'] = Ticket;

export const Tir = enhancerIcon('tir', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="5" cy="17" r="2" />
  <circle cx="17" cy="17" r="2" />
  <path d="M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5" />
  <path d="M12 18v-13h3" />
  <polyline points="3 17 3 12 12 12" />
</svg>
));
Tir.displayName = 'Tir';
all['tir'] = Tir;

export const ToggleLeft = enhancerIcon('toggle-left', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="8" cy="12" r="2" />
  <rect x="2" y="6" width="20" height="12" rx="6" />
</svg>
));
ToggleLeft.displayName = 'ToggleLeft';
all['toggle-left'] = ToggleLeft;

export const ToggleRight = enhancerIcon('toggle-right', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="16" cy="12" r="2" />
  <rect x="2" y="6" width="20" height="12" rx="6" />
</svg>
));
ToggleRight.displayName = 'ToggleRight';
all['toggle-right'] = ToggleRight;

export const Tool = enhancerIcon('tool', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
</svg>
));
Tool.displayName = 'Tool';
all['tool'] = Tool;

export const ToolsKitchen = enhancerIcon('tools-kitchen', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 3h8l-1 9h-6z" />
  <path d="M7 18h2v3h-2z" />
  <path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z" />
  <path d="M20 15v6h-1v-3" />
  <line x1="8" y1="12" x2="8" y2="18" />
</svg>
));
ToolsKitchen.displayName = 'ToolsKitchen';
all['tools-kitchen'] = ToolsKitchen;

export const Tools = enhancerIcon('tools', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
  <polyline points="12 8 7 3 3 7 8 12" />
  <line x1="7" y1="8" x2="5.5" y2="9.5" />
  <polyline points="16 12 21 17 17 21 12 16" />
  <line x1="16" y1="17" x2="14.5" y2="18.5" />
</svg>
));
Tools.displayName = 'Tools';
all['tools'] = Tools;

export const Tornado = enhancerIcon('tornado', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="21" y1="4" x2="3" y2="4" />
  <line x1="13" y1="16" x2="7" y2="16" />
  <line x1="11" y1="20" x2="15" y2="20" />
  <line x1="6" y1="8" x2="20" y2="8" />
  <line x1="4" y1="12" x2="16" y2="12" />
</svg>
));
Tornado.displayName = 'Tornado';
all['tornado'] = Tornado;

export const Tournament = enhancerIcon('tournament', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 6h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" />
  <path d="M5 14h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" />
  <path d="M9 8h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4" />
  <line x1="14" y1="12" x2="19" y2="12" />
</svg>
));
Tournament.displayName = 'Tournament';
all['tournament'] = Tournament;

export const Tractor = enhancerIcon('tractor', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="15" r="4" />
  <line x1="7" y1="15" x2="7" y2="15.01" />
  <circle cx="19" cy="17" r="2" />
  <line x1="10.5" y1="17" x2="17" y2="17" />
  <path d="M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5" />
  <path d="M18 5h-1a1 1 0 0 0 -1 1v4" />
</svg>
));
Tractor.displayName = 'Tractor';
all['tractor'] = Tractor;

export const Trademark = enhancerIcon('trademark', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4.5 9h5m-2.5 0v6" />
  <path d="M13 15v-6l3 4l3 -4v6" />
</svg>
));
Trademark.displayName = 'Trademark';
all['trademark'] = Trademark;

export const TrafficCone = enhancerIcon('traffic-cone', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="20" y2="20" />
  <line x1="9.4" y1="10" x2="14.6" y2="10" />
  <line x1="7.8" y1="15" x2="16.2" y2="15" />
  <path d="M6 20l5 -15h2l5 15" />
</svg>
));
TrafficCone.displayName = 'TrafficCone';
all['traffic-cone'] = TrafficCone;

export const TrafficLights = enhancerIcon('traffic-lights', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="7" y="2" width="10" height="20" rx="5" />
  <circle cx="12" cy="7" r="1" />
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="17" r="1" />
</svg>
));
TrafficLights.displayName = 'TrafficLights';
all['traffic-lights'] = TrafficLights;

export const Train = enhancerIcon('train', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8" />
  <path d="M3 15h16a2 2 0 0 0 2 -2" />
  <path d="M3 6v5h17.5" />
  <line x1="3" y1="10" x2="3" y2="14" />
  <line x1="8" y1="11" x2="8" y2="6" />
  <line x1="13" y1="11" x2="13" y2="6.5" />
  <line x1="3" y1="19" x2="21" y2="19" />
</svg>
));
Train.displayName = 'Train';
all['train'] = Train;

export const TrashOff = enhancerIcon('trash-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M4 7h3m4 0h9" />
  <line x1="10" y1="11" x2="10" y2="17" />
  <line x1="14" y1="14" x2="14" y2="17" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923" />
  <line x1="18.384" y1="14.373" x2="19" y2="7" />
  <path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
));
TrashOff.displayName = 'TrashOff';
all['trash-off'] = TrashOff;

export const Trash = enhancerIcon('trash', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="7" x2="20" y2="7" />
  <line x1="10" y1="11" x2="10" y2="17" />
  <line x1="14" y1="11" x2="14" y2="17" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
));
Trash.displayName = 'Trash';
all['trash'] = Trash;

export const Trees = enhancerIcon('trees', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="3" width="8" height="14" rx="4" />
  <rect x="12" y="7" width="8" height="10" rx="3" />
  <line x1="8" y1="21" x2="8" y2="13" />
  <line x1="16" y1="21" x2="16" y2="14" />
</svg>
));
Trees.displayName = 'Trees';
all['trees'] = Trees;

export const TrendingDown2 = enhancerIcon('trending-down-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 6h5l7 10h6" />
  <path d="M18 19l3 -3l-3 -3" />
</svg>
));
TrendingDown2.displayName = 'TrendingDown2';
all['trending-down-2'] = TrendingDown2;

export const TrendingDown3 = enhancerIcon('trending-down-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 6h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397" />
  <path d="M18 19l3 -3l-3 -3" />
</svg>
));
TrendingDown3.displayName = 'TrendingDown3';
all['trending-down-3'] = TrendingDown3;

export const TrendingDown = enhancerIcon('trending-down', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 7 9 13 13 9 21 17" />
  <polyline points="21 10 21 17 14 17" />
</svg>
));
TrendingDown.displayName = 'TrendingDown';
all['trending-down'] = TrendingDown;

export const TrendingUp2 = enhancerIcon('trending-up-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 5l3 3l-3 3" />
  <path d="M3 18h5l7 -10h6" />
</svg>
));
TrendingUp2.displayName = 'TrendingUp2';
all['trending-up-2'] = TrendingUp2;

export const TrendingUp3 = enhancerIcon('trending-up-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 5l3 3l-3 3" />
  <path d="M3 18h2.397a5 5 0 0 0 4.096 -2.133l4.014 -5.734a5 5 0 0 1 4.096 -2.133h3.397" />
</svg>
));
TrendingUp3.displayName = 'TrendingUp3';
all['trending-up-3'] = TrendingUp3;

export const TrendingUp = enhancerIcon('trending-up', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 17 9 11 13 15 21 7" />
  <polyline points="14 7 21 7 21 14" />
</svg>
));
TrendingUp.displayName = 'TrendingUp';
all['trending-up'] = TrendingUp;

export const TriangleSquareCircle = enhancerIcon('triangle-square-circle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3l-4 7h8z" />
  <circle cx="17" cy="17" r="3" />
  <rect x="4" y="14" width="6" height="6" rx="1" />
</svg>
));
TriangleSquareCircle.displayName = 'TriangleSquareCircle';
all['triangle-square-circle'] = TriangleSquareCircle;

export const Triangle = enhancerIcon('triangle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
</svg>
));
Triangle.displayName = 'Triangle';
all['triangle'] = Triangle;

export const Trident = enhancerIcon('trident', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 6l2 -2v3a7 7 0 0 0 14 0v-3l2 2" />
  <path d="M12 21v-18l-2 2m4 0l-2 -2" />
</svg>
));
Trident.displayName = 'Trident';
all['trident'] = Trident;

export const Trophy = enhancerIcon('trophy', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="8" y1="21" x2="16" y2="21" />
  <line x1="12" y1="17" x2="12" y2="21" />
  <line x1="7" y1="4" x2="17" y2="4" />
  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
  <circle cx="5" cy="9" r="2" />
  <circle cx="19" cy="9" r="2" />
</svg>
));
Trophy.displayName = 'Trophy';
all['trophy'] = Trophy;

export const TruckDelivery = enhancerIcon('truck-delivery', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="17" r="2" />
  <circle cx="17" cy="17" r="2" />
  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
  <line x1="3" y1="9" x2="7" y2="9" />
</svg>
));
TruckDelivery.displayName = 'TruckDelivery';
all['truck-delivery'] = TruckDelivery;

export const TruckReturn = enhancerIcon('truck-return', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="17" r="2" />
  <circle cx="17" cy="17" r="2" />
  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />
  <line x1="9" y1="17" x2="15" y2="17" />
  <path d="M13 6h5l3 5v6h-2" />
</svg>
));
TruckReturn.displayName = 'TruckReturn';
all['truck-return'] = TruckReturn;

export const Truck = enhancerIcon('truck', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="7" cy="17" r="2" />
  <circle cx="17" cy="17" r="2" />
  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
</svg>
));
Truck.displayName = 'Truck';
all['truck'] = Truck;

export const Typography = enhancerIcon('typography', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="7" y2="20" />
  <line x1="14" y1="20" x2="21" y2="20" />
  <line x1="6.9" y1="15" x2="13.8" y2="15" />
  <line x1="10.2" y1="6.3" x2="16" y2="20" />
  <polyline points="5 20 11 4 13 4 20 20" />
</svg>
));
Typography.displayName = 'Typography';
all['typography'] = Typography;

export const Umbrella = enhancerIcon('umbrella', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12a8 8 0 0 1 16 0z" />
  <path d="M12 12v6a2 2 0 0 0 4 0" />
</svg>
));
Umbrella.displayName = 'Umbrella';
all['umbrella'] = Umbrella;

export const Underline = enhancerIcon('underline', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="6" y1="20" x2="18" y2="20" />
  <path d="M8 5v6a4 4 0 0 0 8 0v-6" />
</svg>
));
Underline.displayName = 'Underline';
all['underline'] = Underline;

export const Unlink = enhancerIcon('unlink', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
  <line x1="16" y1="21" x2="16" y2="19" />
  <line x1="19" y1="16" x2="21" y2="16" />
  <line x1="3" y1="8" x2="5" y2="8" />
  <line x1="8" y1="3" x2="8" y2="5" />
</svg>
));
Unlink.displayName = 'Unlink';
all['unlink'] = Unlink;

export const Upload = enhancerIcon('upload', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <polyline points="7 9 12 4 17 9" />
  <line x1="12" y1="4" x2="12" y2="16" />
</svg>
));
Upload.displayName = 'Upload';
all['upload'] = Upload;

export const Urgent = enhancerIcon('urgent', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 16v-4a4 4 0 0 1 8 0v4" />
  <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
  <rect x="6" y="16" width="12" height="4" rx="1" />
</svg>
));
Urgent.displayName = 'Urgent';
all['urgent'] = Urgent;

export const UserCheck = enhancerIcon('user-check', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="7" r="4" />
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  <path d="M16 11l2 2l4 -4" />
</svg>
));
UserCheck.displayName = 'UserCheck';
all['user-check'] = UserCheck;

export const UserExclamation = enhancerIcon('user-exclamation', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="7" r="4" />
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  <line x1="19" y1="7" x2="19" y2="10" />
  <line x1="19" y1="14" x2="19" y2="14.01" />
</svg>
));
UserExclamation.displayName = 'UserExclamation';
all['user-exclamation'] = UserExclamation;

export const UserMinus = enhancerIcon('user-minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="7" r="4" />
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  <line x1="16" y1="11" x2="22" y2="11" />
</svg>
));
UserMinus.displayName = 'UserMinus';
all['user-minus'] = UserMinus;

export const UserOff = enhancerIcon('user-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14.274 10.291a4 4 0 1 0 -5.554 -5.58m-.548 3.453a4.01 4.01 0 0 0 2.62 2.65" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 1.147 .167m2.685 2.681a4 4 0 0 1 .168 1.152v2" />
  <line x1="3" y1="3" x2="21" y2="21" />
</svg>
));
UserOff.displayName = 'UserOff';
all['user-off'] = UserOff;

export const UserPlus = enhancerIcon('user-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="7" r="4" />
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  <path d="M16 11h6m-3 -3v6" />
</svg>
));
UserPlus.displayName = 'UserPlus';
all['user-plus'] = UserPlus;

export const UserX = enhancerIcon('user-x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="7" r="4" />
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  <path d="M17 9l4 4m0 -4l-4 4" />
</svg>
));
UserX.displayName = 'UserX';
all['user-x'] = UserX;

export const User = enhancerIcon('user', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="7" r="4" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
</svg>
));
User.displayName = 'User';
all['user'] = User;

export const Users = enhancerIcon('users', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="9" cy="7" r="4" />
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
</svg>
));
Users.displayName = 'Users';
all['users'] = Users;

export const VectorBeizer2 = enhancerIcon('vector-beizer-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="3" width="4" height="4" rx="1" />
  <rect x="17" y="17" width="4" height="4" rx="1" />
  <line x1="7" y1="5" x2="14" y2="5" />
  <line x1="10" y1="19" x2="17" y2="19" />
  <circle cx="9" cy="19" r="1" />
  <circle cx="15" cy="5" r="1" />
  <path d="M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5" />
</svg>
));
VectorBeizer2.displayName = 'VectorBeizer2';
all['vector-beizer-2'] = VectorBeizer2;

export const VectorBeizer = enhancerIcon('vector-beizer', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="14" width="4" height="4" rx="1" />
  <rect x="17" y="14" width="4" height="4" rx="1" />
  <rect x="10" y="6" width="4" height="4" rx="1" />
  <path d="M10 8.5a6 6 0 0 0 -5 5.5" />
  <path d="M14 8.5a6 6 0 0 1 5 5.5" />
  <line x1="10" y1="8" x2="4" y2="8" />
  <line x1="20" y1="8" x2="14" y2="8" />
  <circle cx="3" cy="8" r="1" />
  <circle cx="21" cy="8" r="1" />
</svg>
));
VectorBeizer.displayName = 'VectorBeizer';
all['vector-beizer'] = VectorBeizer;

export const VectorTriangle = enhancerIcon('vector-triangle', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="10" y="4" width="4" height="4" rx="1" />
  <rect x="3" y="17" width="4" height="4" rx="1" />
  <rect x="17" y="17" width="4" height="4" rx="1" />
  <line x1="6.5" y1="17.1" x2="11.5" y2="8" />
  <line x1="17.5" y1="17.1" x2="12.5" y2="8" />
  <line x1="7" y1="19" x2="17" y2="19" />
</svg>
));
VectorTriangle.displayName = 'VectorTriangle';
all['vector-triangle'] = VectorTriangle;

export const Vector = enhancerIcon('vector', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="3" width="4" height="4" rx="1" />
  <rect x="17" y="3" width="4" height="4" rx="1" />
  <rect x="17" y="17" width="4" height="4" rx="1" />
  <rect x="3" y="17" width="4" height="4" rx="1" />
  <line x1="5" y1="7" x2="5" y2="17" />
  <line x1="19" y1="7" x2="19" y2="17" />
  <line x1="7" y1="5" x2="17" y2="5" />
  <line x1="7" y1="19" x2="17" y2="19" />
</svg>
));
Vector.displayName = 'Vector';
all['vector'] = Vector;

export const Venus = enhancerIcon('venus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="9" r="5" />
  <line x1="12" y1="14" x2="12" y2="21" />
  <line x1="9" y1="18" x2="15" y2="18" />
</svg>
));
Venus.displayName = 'Venus';
all['venus'] = Venus;

export const Versions = enhancerIcon('versions', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="10" y="5" width="10" height="14" rx="2" />
  <line x1="7" y1="7" x2="7" y2="17" />
  <line x1="4" y1="8" x2="4" y2="16" />
</svg>
));
Versions.displayName = 'Versions';
all['versions'] = Versions;

export const VideoMinus = enhancerIcon('video-minus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
  <rect x="3" y="6" width="12" height="12" rx="2" />
  <line x1="7" y1="12" x2="11" y2="12" />
</svg>
));
VideoMinus.displayName = 'VideoMinus';
all['video-minus'] = VideoMinus;

export const VideoOff = enhancerIcon('video-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M15 11v-1l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -.675 .946" />
  <path d="M10 6h3a2 2 0 0 1 2 2v3m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h1" />
</svg>
));
VideoOff.displayName = 'VideoOff';
all['video-off'] = VideoOff;

export const VideoPlus = enhancerIcon('video-plus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
  <rect x="3" y="6" width="12" height="12" rx="2" />
  <line x1="7" y1="12" x2="11" y2="12" />
  <line x1="9" y1="10" x2="9" y2="14" />
</svg>
));
VideoPlus.displayName = 'VideoPlus';
all['video-plus'] = VideoPlus;

export const Video = enhancerIcon('video', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
  <rect x="3" y="6" width="12" height="12" rx="2" />
</svg>
));
Video.displayName = 'Video';
all['video'] = Video;

export const View360 = enhancerIcon('view-360', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <ellipse cx="12" cy="12" rx="4" ry="9" />
  <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(90 12 12)" />
</svg>
));
View360.displayName = 'View360';
all['view-360'] = View360;

export const Viewfinder = enhancerIcon('viewfinder', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="12" y1="3" x2="12" y2="7" />
  <line x1="12" y1="21" x2="12" y2="18" />
  <line x1="3" y1="12" x2="7" y2="12" />
  <line x1="21" y1="12" x2="18" y2="12" />
  <line x1="12" y1="12" x2="12" y2="12.01" />
</svg>
));
Viewfinder.displayName = 'Viewfinder';
all['viewfinder'] = Viewfinder;

export const ViewportNarrow = enhancerIcon('viewport-narrow', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12h7l-3 -3m0 6l3 -3" />
  <path d="M21 12h-7l3 -3m0 6l-3 -3" />
  <path d="M9 6v-3h6v3" />
  <path d="M9 18v3h6v-3" />
</svg>
));
ViewportNarrow.displayName = 'ViewportNarrow';
all['viewport-narrow'] = ViewportNarrow;

export const ViewportWide = enhancerIcon('viewport-wide', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 12h-7l3 -3m0 6l-3 -3" />
  <path d="M14 12h7l-3 -3m0 6l3 -3" />
  <path d="M3 6v-3h18v3" />
  <path d="M3 18v3h18v-3" />
</svg>
));
ViewportWide.displayName = 'ViewportWide';
all['viewport-wide'] = ViewportWide;

export const VirusOff = enhancerIcon('virus-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="3" y1="3" x2="21" y2="21" />
  <path d="M8.469 8.46a5 5 0 0 0 7.058 7.084m1.386 -2.608a5 5 0 0 0 -5.826 -5.853" />
  <path d="M12 7v-4m-1 0h2" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" />
  <line x1="12" y1="3" x2="13" y2="3" transform="rotate(135 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" />
  <line x1="12" y1="3" x2="11" y2="3" transform="rotate(315 12 12)" />
</svg>
));
VirusOff.displayName = 'VirusOff';
all['virus-off'] = VirusOff;

export const VirusSearch = enhancerIcon('virus-search', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 12a5 5 0 1 0 -5 5" />
  <path d="M12 7v-4m-1 0h2" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(315 12 12)" />
  <circle cx="17.5" cy="17.5" r="2.5" />
  <line x1="19.5" y1="19.5" x2="22" y2="22" />
</svg>
));
VirusSearch.displayName = 'VirusSearch';
all['virus-search'] = VirusSearch;

export const Virus = enhancerIcon('virus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="5" />
  <path d="M12 7v-4m-1 0h2" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(135 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" />
  <path d="M12 7v-4m-1 0h2" transform="rotate(315 12 12)" />
</svg>
));
Virus.displayName = 'Virus';
all['virus'] = Virus;

export const Volume2 = enhancerIcon('volume-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 8a5 5 0 0 1 0 8" />
  <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
</svg>
));
Volume2.displayName = 'Volume2';
all['volume-2'] = Volume2;

export const Volume3 = enhancerIcon('volume-3', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
  <path d="M16 10l4 4m0 -4l-4 4" />
</svg>
));
Volume3.displayName = 'Volume3';
all['volume-3'] = Volume3;

export const Volume = enhancerIcon('volume', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 8a5 5 0 0 1 0 8" />
  <path d="M17.7 5a9 9 0 0 1 0 14" />
  <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
</svg>
));
Volume.displayName = 'Volume';
all['volume'] = Volume;

export const Walk = enhancerIcon('walk', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="13" cy="4" r="1" />
  <line x1="7" y1="21" x2="10" y2="17" />
  <path d="M16 21l-2 -4l-3 -3l1 -6" />
  <path d="M6 12l2 -3l4 -1l3 3l3 1" />
</svg>
));
Walk.displayName = 'Walk';
all['walk'] = Walk;

export const Wallet = enhancerIcon('wallet', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
</svg>
));
Wallet.displayName = 'Wallet';
all['wallet'] = Wallet;

export const Wand = enhancerIcon('wand', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="6 21 21 6 18 3 3 18 6 21" />
  <line x1="15" y1="6" x2="18" y2="9" />
  <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
  <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
</svg>
));
Wand.displayName = 'Wand';
all['wand'] = Wand;

export const WaveSawTool = enhancerIcon('wave-saw-tool', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12h5l4 8v-16l4 8h5" />
</svg>
));
WaveSawTool.displayName = 'WaveSawTool';
all['wave-saw-tool'] = WaveSawTool;

export const WaveSine = enhancerIcon('wave-sine', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M21 12h-2c-.894 0 -1.662 -.857 -1.761 -2c-.296 -3.45 -.749 -6 -2.749 -6s-2.5 3.582 -2.5 8s-.5 8 -2.5 8s-2.452 -2.547 -2.749 -6c-.1 -1.147 -.867 -2 -1.763 -2h-2" />
</svg>
));
WaveSine.displayName = 'WaveSine';
all['wave-sine'] = WaveSine;

export const WaveSquare = enhancerIcon('wave-square', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12h5v8h4v-16h4v8h5" />
</svg>
));
WaveSquare.displayName = 'WaveSquare';
all['wave-square'] = WaveSquare;

export const Wifi0 = enhancerIcon('wifi-0', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="18" x2="12.01" y2="18" />
</svg>
));
Wifi0.displayName = 'Wifi0';
all['wifi-0'] = Wifi0;

export const Wifi1 = enhancerIcon('wifi-1', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="18" x2="12.01" y2="18" />
  <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
</svg>
));
Wifi1.displayName = 'Wifi1';
all['wifi-1'] = Wifi1;

export const Wifi2 = enhancerIcon('wifi-2', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="18" x2="12.01" y2="18" />
  <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
  <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
</svg>
));
Wifi2.displayName = 'Wifi2';
all['wifi-2'] = Wifi2;

export const WifiOff = enhancerIcon('wifi-off', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="18" x2="12.01" y2="18" />
  <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
  <path d="M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2" />
  <path d="M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374" />
  <line x1="3" y1="3" x2="21" y2="21" />
</svg>
));
WifiOff.displayName = 'WifiOff';
all['wifi-off'] = WifiOff;

export const Wifi = enhancerIcon('wifi', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="18" x2="12.01" y2="18" />
  <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
  <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
  <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
</svg>
));
Wifi.displayName = 'Wifi';
all['wifi'] = Wifi;

export const Wind = enhancerIcon('wind', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
  <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
  <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
</svg>
));
Wind.displayName = 'Wind';
all['wind'] = Wind;

export const Windmill = enhancerIcon('windmill', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9z" />
  <path d="M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9z" />
  <path d="M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9z" />
  <path d="M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9z" />
</svg>
));
Windmill.displayName = 'Windmill';
all['windmill'] = Windmill;

export const WiperWash = enhancerIcon('wiper-wash', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="20" r="1" />
  <path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
  <line x1="12" y1="20" x2="12" y2="6" />
  <path d="M4 6a4 4 0 0 1 .4 -1.8" />
  <path d="M7 2.1a4 4 0 0 1 2 0" />
  <path d="M12 6a4 4 0 0 0 -.4 -1.8" />
  <path d="M12 6a4 4 0 0 1 .4 -1.8" />
  <path d="M15 2.1a4 4 0 0 1 2 0" />
  <path d="M20 6a4 4 0 0 0 -.4 -1.8" />
</svg>
));
WiperWash.displayName = 'WiperWash';
all['wiper-wash'] = WiperWash;

export const Wiper = enhancerIcon('wiper', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="18" r="1" />
  <path d="M3 9l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
  <line x1="12" y1="18" x2="9.8" y2="5.2" />
</svg>
));
Wiper.displayName = 'Wiper';
all['wiper'] = Wiper;

export const Woman = enhancerIcon('woman', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="5" r="2" />
  <path d="M10 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
</svg>
));
Woman.displayName = 'Woman';
all['woman'] = Woman;

export const WorldLatitude = enhancerIcon('world-latitude', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="4.6" y1="7" x2="19.4" y2="7" />
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="4.6" y1="17" x2="19.4" y2="17" />
</svg>
));
WorldLatitude.displayName = 'WorldLatitude';
all['world-latitude'] = WorldLatitude;

export const WorldLongitude = enhancerIcon('world-longitude', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M11.5 3a11.2 11.2 0 0 0 0 18" />
  <path d="M12.5 3a11.2 11.2 0 0 1 0 18" />
  <line x1="12" y1="3" x2="12" y2="21" />
</svg>
));
WorldLongitude.displayName = 'WorldLongitude';
all['world-longitude'] = WorldLongitude;

export const World = enhancerIcon('world', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <line x1="3.6" y1="9" x2="20.4" y2="9" />
  <line x1="3.6" y1="15" x2="20.4" y2="15" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a17 17 0 0 1 0 18" />
</svg>
));
World.displayName = 'World';
all['world'] = World;

export const WreckingBall = enhancerIcon('wrecking-ball', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="19" cy="13" r="2" />
  <circle cx="4" cy="17" r="2" />
  <circle cx="13" cy="17" r="2" />
  <line x1="13" y1="19" x2="4" y2="19" />
  <line x1="4" y1="15" x2="13" y2="15" />
  <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
  <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
  <path d="M19 11v-7l-6 7" />
</svg>
));
WreckingBall.displayName = 'WreckingBall';
all['wrecking-ball'] = WreckingBall;

export const X = enhancerIcon('x', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>
));
X.displayName = 'X';
all['x'] = X;

export const YinYang = enhancerIcon('yin-yang', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="12" r="9" />
  <path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" />
  <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
  <circle cx="12" cy="16.5" r=".5" fill="currentColor" />
</svg>
));
YinYang.displayName = 'YinYang';
all['yin-yang'] = YinYang;

export const ZodiacAquarius = enhancerIcon('zodiac-aquarius', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 10l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
  <path d="M3 17l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
</svg>
));
ZodiacAquarius.displayName = 'ZodiacAquarius';
all['zodiac-aquarius'] = ZodiacAquarius;

export const ZodiacAries = enhancerIcon('zodiac-aries', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 5a5 5 0 1 0 -4 8" />
  <path d="M16 13a5 5 0 1 0 -4 -8" />
  <line x1="12" y1="21" x2="12" y2="5" />
</svg>
));
ZodiacAries.displayName = 'ZodiacAries';
all['zodiac-aries'] = ZodiacAries;

export const ZodiacCancer = enhancerIcon('zodiac-cancer', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="12" r="3" />
  <path d="M3 12a10 6.5 0 0 1 14 -6.5" />
  <path d="M21 12a10 6.5 0 0 1 -14 6.5" />
</svg>
));
ZodiacCancer.displayName = 'ZodiacCancer';
all['zodiac-cancer'] = ZodiacCancer;

export const ZodiacCapricorn = enhancerIcon('zodiac-capricorn', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4a3 3 0 0 1 3 3v9" />
  <path d="M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3" />
  <circle cx="16" cy="17" r="3" />
</svg>
));
ZodiacCapricorn.displayName = 'ZodiacCapricorn';
all['zodiac-capricorn'] = ZodiacCapricorn;

export const ZodiacGemini = enhancerIcon('zodiac-gemini', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 3a21 21 0 0 0 18 0" />
  <path d="M3 21a21 21 0 0 1 18 0" />
  <line x1="7" y1="4.5" x2="7" y2="19.5" />
  <line x1="17" y1="4.5" x2="17" y2="19.5" />
</svg>
));
ZodiacGemini.displayName = 'ZodiacGemini';
all['zodiac-gemini'] = ZodiacGemini;

export const ZodiacLeo = enhancerIcon('zodiac-leo', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 17a4 4 0 1 0 8 0" />
  <circle cx="6" cy="16" r="3" />
  <circle cx="11" cy="7" r="4" />
  <path d="M7 7c0 3 2 5 2 9" />
  <path d="M15 7c0 4 -2 6 -2 10" />
</svg>
));
ZodiacLeo.displayName = 'ZodiacLeo';
all['zodiac-leo'] = ZodiacLeo;

export const ZodiacLibra = enhancerIcon('zodiac-libra', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="20" x2="19" y2="20" />
  <path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" />
</svg>
));
ZodiacLibra.displayName = 'ZodiacLibra';
all['zodiac-libra'] = ZodiacLibra;

export const ZodiacPisces = enhancerIcon('zodiac-pisces', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 3a21 21 0 0 1 0 18" />
  <path d="M19 3a21 21 0 0 0 0 18" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>
));
ZodiacPisces.displayName = 'ZodiacPisces';
all['zodiac-pisces'] = ZodiacPisces;

export const ZodiacSagittarius = enhancerIcon('zodiac-sagittarius', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="20" y2="4" />
  <path d="M13 4h7v7" />
  <line x1="6.5" y1="12.5" x2="11.5" y2="17.5" />
</svg>
));
ZodiacSagittarius.displayName = 'ZodiacSagittarius';
all['zodiac-sagittarius'] = ZodiacSagittarius;

export const ZodiacScorpio = enhancerIcon('zodiac-scorpio', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 4a2 2 0 0 1 2 2v9" />
  <path d="M5 6a2 2 0 0 1 4 0v9" />
  <path d="M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3" />
</svg>
));
ZodiacScorpio.displayName = 'ZodiacScorpio';
all['zodiac-scorpio'] = ZodiacScorpio;

export const ZodiacTaurus = enhancerIcon('zodiac-taurus', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 3a6 6 0 0 0 12 0" />
  <circle cx="12" cy="15" r="6" />
</svg>
));
ZodiacTaurus.displayName = 'ZodiacTaurus';
all['zodiac-taurus'] = ZodiacTaurus;

export const ZodiacVirgo = enhancerIcon('zodiac-virgo', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 4a2 2 0 0 1 2 2v9" />
  <path d="M5 6a2 2 0 0 1 4 0v9" />
  <path d="M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" />
  <path d="M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" />
</svg>
));
ZodiacVirgo.displayName = 'ZodiacVirgo';
all['zodiac-virgo'] = ZodiacVirgo;

export const ZoomCancel = enhancerIcon('zoom-cancel', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="8" y1="8" x2="12" y2="12" />
  <line x1="12" y1="8" x2="8" y2="12" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>
));
ZoomCancel.displayName = 'ZoomCancel';
all['zoom-cancel'] = ZoomCancel;

export const ZoomIn = enhancerIcon('zoom-in', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="7" y1="10" x2="13" y2="10" />
  <line x1="10" y1="7" x2="10" y2="13" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>
));
ZoomIn.displayName = 'ZoomIn';
all['zoom-in'] = ZoomIn;

export const ZoomOut = enhancerIcon('zoom-out', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <line x1="7" y1="10" x2="13" y2="10" />
  <line x1="21" y1="21" x2="15" y2="15" />
</svg>
));
ZoomOut.displayName = 'ZoomOut';
all['zoom-out'] = ZoomOut;

export const ZoomQuestion = enhancerIcon('zoom-question', (props) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="10" cy="10" r="7" />
  <path d="M21 21l-6 -6" />
  <line x1="10" y1="13" x2="10" y2="13.01" />
  <path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474" />
</svg>
));
ZoomQuestion.displayName = 'ZoomQuestion';
all['zoom-question'] = ZoomQuestion;
export default all;
