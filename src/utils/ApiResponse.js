class ApiResponse {
    constructor(status, data, message = "message"){
this.status = status
this.data = data
this.message = message
this.success = status < 400 // Should be less than 400 
    }
}