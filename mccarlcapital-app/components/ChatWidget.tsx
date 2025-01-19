import React from 'react';
import Script from 'next/script';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chat-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function ChatWidget() {

  return (
    <div>
        <chat-widget
            location-id="ZELJzSVAkrlrUbN2Vroc">
        </chat-widget>
        <Script
            id="chat-widget"
            src="https://widgets.leadconnectorhq.com/loader.js" 
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
        >
        </Script>
    </div>
  )
}
