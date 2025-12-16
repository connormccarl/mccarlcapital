import { NextRequest, NextResponse } from "next/server";

import sendMail from '@/lib/email/gmail';

export async function POST(
    request: NextRequest,
) {
    /*
    const body = await request.json();

    const htmlContent = `
        <html><body>
            <div>
                <b>Name:</b> ${body.firstName} ${body.lastName}<br/>
                <b>Email:</b> ${body.email}<br/>
                <b>Phone:</b> ${body.phone}<br/>
                <br/>
                <b>Message:</b> <br/>
                <br/>
                ${body.message}
            </div>

        </body></html>
    `;

    const options = {
        to: 'connormccarl@gmail.com',
        replyTo: 'connormccarl@gmail.com',
        subject: 'Website Contact',
        /*text: plainText,
        html: htmlContent,
        textEncoding: 'base64',
        headers: [
            { key: 'X-Application-Developer', value: 'Connor McCarl' },
            { key: 'X-Application-Version', value: 'v1.0.0' },
        ],
    };

    try {
        const messageId = await sendMail(options);
        return NextResponse.json({ success: 'true' }, { status: 200 });
    } catch (e) {
        throw e;
    }
    */ return NextResponse.json({})
}
