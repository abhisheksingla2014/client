/**
 * @fileoverview gRPC-Web generated client stub for com.demo.webfluxdemo.recUnit
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_type_date_pb = require('./google/type/date_pb.js')
const proto = {};
proto.com = {};
proto.com.demo = {};
proto.com.demo.webfluxdemo = {};
proto.com.demo.webfluxdemo.recUnit = require('./recUnit_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.demo.webfluxdemo.recUnit.RecUnitServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.demo.webfluxdemo.recUnit.RecUnitServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.demo.webfluxdemo.recUnit.RecFilter,
 *   !proto.com.demo.webfluxdemo.recUnit.RecUnitResponse>}
 */
const methodDescriptor_RecUnitService_getRecUnitsForFilter = new grpc.web.MethodDescriptor(
  '/com.demo.webfluxdemo.recUnit.RecUnitService/getRecUnitsForFilter',
  grpc.web.MethodType.UNARY,
  proto.com.demo.webfluxdemo.recUnit.RecFilter,
  proto.com.demo.webfluxdemo.recUnit.RecUnitResponse,
  /**
   * @param {!proto.com.demo.webfluxdemo.recUnit.RecFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.demo.webfluxdemo.recUnit.RecUnitResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.demo.webfluxdemo.recUnit.RecFilter,
 *   !proto.com.demo.webfluxdemo.recUnit.RecUnitResponse>}
 */
const methodInfo_RecUnitService_getRecUnitsForFilter = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.demo.webfluxdemo.recUnit.RecUnitResponse,
  /**
   * @param {!proto.com.demo.webfluxdemo.recUnit.RecFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.demo.webfluxdemo.recUnit.RecUnitResponse.deserializeBinary
);


/**
 * @param {!proto.com.demo.webfluxdemo.recUnit.RecFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.demo.webfluxdemo.recUnit.RecUnitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.demo.webfluxdemo.recUnit.RecUnitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.demo.webfluxdemo.recUnit.RecUnitServiceClient.prototype.getRecUnitsForFilter =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.demo.webfluxdemo.recUnit.RecUnitService/getRecUnitsForFilter',
      request,
      metadata || {},
      methodDescriptor_RecUnitService_getRecUnitsForFilter,
      callback);
};


/**
 * @param {!proto.com.demo.webfluxdemo.recUnit.RecFilter} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.demo.webfluxdemo.recUnit.RecUnitResponse>}
 *     Promise that resolves to the response
 */
proto.com.demo.webfluxdemo.recUnit.RecUnitServicePromiseClient.prototype.getRecUnitsForFilter =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.demo.webfluxdemo.recUnit.RecUnitService/getRecUnitsForFilter',
      request,
      metadata || {},
      methodDescriptor_RecUnitService_getRecUnitsForFilter);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.demo.webfluxdemo.recUnit.RecFilter,
 *   !proto.com.demo.webfluxdemo.recUnit.RecUnit>}
 */
const methodDescriptor_RecUnitService_getRecUnitsForFilterStream = new grpc.web.MethodDescriptor(
  '/com.demo.webfluxdemo.recUnit.RecUnitService/getRecUnitsForFilterStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.com.demo.webfluxdemo.recUnit.RecFilter,
  proto.com.demo.webfluxdemo.recUnit.RecUnit,
  /**
   * @param {!proto.com.demo.webfluxdemo.recUnit.RecFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.demo.webfluxdemo.recUnit.RecUnit.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.demo.webfluxdemo.recUnit.RecFilter,
 *   !proto.com.demo.webfluxdemo.recUnit.RecUnit>}
 */
const methodInfo_RecUnitService_getRecUnitsForFilterStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.demo.webfluxdemo.recUnit.RecUnit,
  /**
   * @param {!proto.com.demo.webfluxdemo.recUnit.RecFilter} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.demo.webfluxdemo.recUnit.RecUnit.deserializeBinary
);


/**
 * @param {!proto.com.demo.webfluxdemo.recUnit.RecFilter} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.demo.webfluxdemo.recUnit.RecUnit>}
 *     The XHR Node Readable Stream
 */
proto.com.demo.webfluxdemo.recUnit.RecUnitServiceClient.prototype.getRecUnitsForFilterStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.demo.webfluxdemo.recUnit.RecUnitService/getRecUnitsForFilterStream',
      request,
      metadata || {},
      methodDescriptor_RecUnitService_getRecUnitsForFilterStream);
};


/**
 * @param {!proto.com.demo.webfluxdemo.recUnit.RecFilter} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.demo.webfluxdemo.recUnit.RecUnit>}
 *     The XHR Node Readable Stream
 */
proto.com.demo.webfluxdemo.recUnit.RecUnitServicePromiseClient.prototype.getRecUnitsForFilterStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.demo.webfluxdemo.recUnit.RecUnitService/getRecUnitsForFilterStream',
      request,
      metadata || {},
      methodDescriptor_RecUnitService_getRecUnitsForFilterStream);
};


module.exports = proto.com.demo.webfluxdemo.recUnit;

