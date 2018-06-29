/**
 * [uncaughtExceptionHandler description]
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export default function uncaughtExceptionHandler(e) {
  console.error('An unhandled exception occurred. Server is exiting...');
  console.error(e);

  process.exit(1);
}
