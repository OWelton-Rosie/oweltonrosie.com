export async function onRequest(context) {
    const url = new URL(context.request.url);

    if (url.pathname.toLowerCase() === "/pbs" ||
        url.pathname.toLowerCase() === "/pbs/") {
        return Response.redirect(
            "https://docs.google.com/spreadsheets/d/1gKHcdsEJ_HWRASUQYmWYzuLViIqzx7UYjpbNdobcsVM/edit?usp=sharing",
            301
        );
    }

    return context.next();
}
