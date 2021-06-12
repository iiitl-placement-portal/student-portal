const SvgIcon = (props) => (
  <img
    src={`/images/${props.src}`}
    alt={props.src}
    className={props.classname}
  />
);

export default SvgIcon;
