/**
 * [unhandledRejectionHandler description]
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export default function unhandledRejectionHandler(e) {
  console.error(`An unhandled promise rejection occurred: ${e}`);
}
