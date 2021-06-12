const SvgIcon = (props) => (
  <img
    src={`/images/${props.src}`}
    alt={props.alt}
    className={props.classname}
  />
);

export default SvgIcon;
