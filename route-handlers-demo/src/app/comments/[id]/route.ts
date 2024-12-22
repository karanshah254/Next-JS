import { comments } from '../data'
import { redirect } from 'next/navigation'

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    // redirect route handler
    if(parseInt(params.id) > comments.length) {
        redirect('/comments')
    }

    // dynamic route handler
    const comment = comments.find((comment) => comment.id === parseInt(params.id))
    return Response.json(comment)
}

// handle PATCH request
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json()
    const { text } = body
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id))
    comments[index].text = text
    return Response.json(comments[index])
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id))
    const deleteComment = comments[index]
    comments.splice(index, 1)
    return Response.json(deleteComment)
}