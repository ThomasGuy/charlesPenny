import React from 'react';
import LayoutContainer from './src/containers/LayoutContainer';

export function wrapPageElement({ element, props }) {
  return <LayoutContainer {...props}>{element}</LayoutContainer>;
}
