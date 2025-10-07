class ApiResponse {
constructor(
    statusode,
    data,
    message = "success"
){
    this.statusode = statusode
    this.data = data
    this.message = message
    this.success = statusode < 400
}
}