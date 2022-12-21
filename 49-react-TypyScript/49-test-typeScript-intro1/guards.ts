function pretty(arg: string | number): string | number {
  if (typeof arg === 'number') {
    return arg.toFixed(2);
  } else {
    return arg.trim();
  }
}

class SuccessResponse {
  headers: string[];
  body: string;
}

class ErrorResponse {
  headers: string[];
  code: number;
}

function handleResponse(response: SuccessResponse | ErrorResponse): {
  messeage: string | number;
} {
  if (response instanceof SuccessResponse) {
    return { messeage: response.body };
  } else {
    return { messeage: response.code };
  }
}
