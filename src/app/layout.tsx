import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        {/* Start of OpenWidget (www.openwidget.com) code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.__ow = window.__ow || {};
            window.__ow.organizationId = "3b4f9d8d-55c1-4b2d-9de9-27f25e097475";
            window.__ow.integration_name = "manual_settings";
            window.__ow.product_name = "openwidget";   
            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
          `,
          }}
        />
        <noscript>
          You need to{" "}
          <a
            href="https://www.openwidget.com/enable-javascript"
            rel="noopener nofollow"
          >
            enable JavaScript
          </a>{" "}
          to chat with the Arc AI (Believe me, you don&apos;t wanna miss it).
        </noscript>
        {/* End of OpenWidget code */}
      </body>
      <Analytics />
    </html>
  );
}
