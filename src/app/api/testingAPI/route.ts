// filename route.ts serves the same purpose as a page.ts/tsx file in that is the default (index)
// page for the folder it located in



// route.ts and a page.ts can not share the same folder -



import { NextResponse  } from 'next/server'

export async function GET() {


return NextResponse.json({
    'message': "this is the message you turd"
})
}
