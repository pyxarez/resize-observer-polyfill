/**
 * Check is the target is an Element by duck typing.
 * https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
 * http://tobyho.com/2011/01/28/checking-types-in-javascript/
 *
 * @param {Object} target
 * @returns {Boolean}
 */

export default target => {
    // Call the Object.prototype.toString method to check for presence of 'Element' string
    // This method reliably differentiates between native types

    const regex = /element/gi;
    const hasElementStr = regex.test(Object.prototype.toString.call(target));

    return (
        typeof HTMLElement === 'object' ? target instanceof HTMLElement : //DOM2
            target && hasElementStr && typeof target === 'object' && target !== null && target.nodeType === 1 && typeof target.nodeName === 'string'
    );
};
