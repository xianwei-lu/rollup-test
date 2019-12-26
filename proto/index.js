/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

console.log($protobuf)

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const TEST = $root.TEST = (() => {

    /**
     * Namespace TEST.
     * @exports TEST
     * @namespace
     */
    const TEST = {};

    TEST.TestType = (function() {

        /**
         * Properties of a TestType.
         * @memberof TEST
         * @interface ITestType
         * @property {number} notiType TestType notiType
         */

        /**
         * Constructs a new TestType.
         * @memberof TEST
         * @classdesc Represents a TestType.
         * @implements ITestType
         * @constructor
         * @param {TEST.ITestType=} [properties] Properties to set
         */
        function TestType(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestType notiType.
         * @member {number} notiType
         * @memberof TEST.TestType
         * @instance
         */
        TestType.prototype.notiType = 0;

        /**
         * Creates a new TestType instance using the specified properties.
         * @function create
         * @memberof TEST.TestType
         * @static
         * @param {TEST.ITestType=} [properties] Properties to set
         * @returns {TEST.TestType} TestType instance
         */
        TestType.create = function create(properties) {
            return new TestType(properties);
        };

        /**
         * Encodes the specified TestType message. Does not implicitly {@link TEST.TestType.verify|verify} messages.
         * @function encode
         * @memberof TEST.TestType
         * @static
         * @param {TEST.ITestType} message TestType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.notiType);
            return writer;
        };

        /**
         * Encodes the specified TestType message, length delimited. Does not implicitly {@link TEST.TestType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TEST.TestType
         * @static
         * @param {TEST.ITestType} message TestType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestType message from the specified reader or buffer.
         * @function decode
         * @memberof TEST.TestType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TEST.TestType} TestType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TEST.TestType();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.notiType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("notiType"))
                throw $util.ProtocolError("missing required 'notiType'", { instance: message });
            return message;
        };

        /**
         * Decodes a TestType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TEST.TestType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TEST.TestType} TestType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestType message.
         * @function verify
         * @memberof TEST.TestType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.notiType))
                return "notiType: integer expected";
            return null;
        };

        /**
         * Creates a TestType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TEST.TestType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TEST.TestType} TestType
         */
        TestType.fromObject = function fromObject(object) {
            if (object instanceof $root.TEST.TestType)
                return object;
            let message = new $root.TEST.TestType();
            if (object.notiType != null)
                message.notiType = object.notiType | 0;
            return message;
        };

        /**
         * Creates a plain object from a TestType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TEST.TestType
         * @static
         * @param {TEST.TestType} message TestType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.notiType = 0;
            if (message.notiType != null && message.hasOwnProperty("notiType"))
                object.notiType = message.notiType;
            return object;
        };

        /**
         * Converts this TestType to JSON.
         * @function toJSON
         * @memberof TEST.TestType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestType;
    })();

    return TEST;
})();

export { $root as default };
