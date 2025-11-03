import React from 'react';

function Image({
  src,
  alt = "Image Name",
  className = "",
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      }}
      {...props}
    />
  );
}

export default Image;