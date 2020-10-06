'use strict';

export default function isArrayLike (data) {
  return Array.isArray(data) || ArrayBuffer.isView(data);
};
