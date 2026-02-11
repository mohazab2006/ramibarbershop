import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_ORIGIN = 'https://eopeytscrcaamwnlzoho.supabase.co';
const ALLOWED_PATH_PREFIX = '/storage/v1/object/public/';

function isAllowedVideoUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return (
      u.origin === ALLOWED_ORIGIN &&
      u.pathname.startsWith(ALLOWED_PATH_PREFIX) &&
      /\.(mp4|webm|mov)$/i.test(u.pathname)
    );
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  if (!url || !isAllowedVideoUrl(url)) {
    return NextResponse.json({ error: 'Invalid or disallowed video URL' }, { status: 400 });
  }

  const headers: HeadersInit = {};
  const range = request.headers.get('range');
  if (range) headers['Range'] = range;

  const res = await fetch(url, { headers });
  if (!res.ok) {
    return NextResponse.json({ error: 'Upstream error' }, { status: res.status });
  }

  const responseHeaders = new Headers();
  const contentType = res.headers.get('content-type');
  if (contentType) responseHeaders.set('Content-Type', contentType);
  const contentLength = res.headers.get('content-length');
  if (contentLength) responseHeaders.set('Content-Length', contentLength);
  const contentRange = res.headers.get('content-range');
  if (contentRange) responseHeaders.set('Content-Range', contentRange);
  const acceptRanges = res.headers.get('accept-ranges') ?? 'bytes';
  responseHeaders.set('Accept-Ranges', acceptRanges);
  responseHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');

  return new NextResponse(res.body, {
    status: res.status,
    headers: responseHeaders,
  });
}
