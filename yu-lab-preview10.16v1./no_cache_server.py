#!/usr/bin/env python3
"""Serve this preview site while forcing browsers and CDNs to revalidate."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class RevalidatingHandler(SimpleHTTPRequestHandler):
    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-cache, max-age=0, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    ThreadingHTTPServer(("0.0.0.0", 18080), RevalidatingHandler).serve_forever()
