function Select(props) {
  return (
    <select
      {...props}
      className={`${props.className} w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950`}
    ></select>
  );
}

export default Select;
