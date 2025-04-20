import "./StarBorder.css";

const StarBorder = ({
<<<<<<< HEAD
as: Component = "button",
className = "",
color = "white",
speed = "6s",
children,
...rest
}) => {
return (
  <Component className={`star-border-container ${className}`} {...rest}>
    <div
      className="border-gradient-bottom"
      style={{
        background: `radial-gradient(circle, ${color}, transparent 10%)`,
        animationDuration: speed,
      }}
    ></div>
    <div
      className="border-gradient-top"
      style={{
        background: `radial-gradient(circle, ${color}, transparent 10%)`,
        animationDuration: speed,
      }}
    ></div>
    <div className="inner-content">{children}</div>
  </Component>
);
};

export default StarBorder;
=======
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}) => {
  return (
    <Component className={`star-border-container ${className}`} {...rest}>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
>>>>>>> 9c14e517fb0fe65674b620d55942f05cf3d91f67
