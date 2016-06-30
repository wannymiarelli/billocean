module.exports = {
  error: function(code, message){
    return {
      status: 'error',
      code: code,
      message: message
    }
  },
  success: function(data){
    return {
      status: 'success',
      code: 201,
      data: data
    }
  }
}
