function Label(props) {
  return (
    <label {...props} className={`${props.className} block text-gray-700 dark:text-gray-300`}>
      {props.children}
    </label>
  );
}

export default Label;
