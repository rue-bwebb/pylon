/**
 * [health description]
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
export default function health(ctx) {
  ctx.status = 200;
  ctx.body = 'ok';
}