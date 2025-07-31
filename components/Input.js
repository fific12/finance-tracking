function Input(props) {
  const styles = {
    default:
      "w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",
    checkbox:
      "rounded border-gray-300 bg-white text-gray-700 dark:text-gray-500 dark:bg-gray-950 shadow-sm",
  };

  return (
    <input {...props} className={styles[props.type] ?? styles['default']} />
  );
}

export default Input;
