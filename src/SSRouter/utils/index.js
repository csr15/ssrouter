/**
 * @class CustomError
 * @description
 * Use this class to create specific error instances with custom names and error messages.
 * 
 * @extends Error
 * @param {string} message - The error message associated with this CustomError instance.
 *
 */
export class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}