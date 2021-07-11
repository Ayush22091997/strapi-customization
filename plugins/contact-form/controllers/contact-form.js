'use strict';

/**
 * contact-form.js controller
 *
 * @description: A set of functions called "actions" of the `contact-form` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
    
  },
  postMessage: async(ctx)=>{
    if(!data.name || !data.email || !data.message){
      return (ctx.badRequest('All parameters must be defined'));
    }
    const data=ctx.request.body;
    const result=await createStrapi.entityService.create({data},{model:"plugins::contact-form.message"});
    return result;
  }
};
