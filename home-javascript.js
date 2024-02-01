const host = 'thegoodspoolservice.com';
if ((host == window.location.host) && (window.location.protocol != 'https:')) {
    window.location.protocol = 'https:';
}