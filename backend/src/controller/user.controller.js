export const register = async (request, response) => {
    console.log(request.body)

    response.status(201).json({ success: true, message: 'Your registration is complete' })
}