<!DOCTYPE html>
<html>
<head>
    <title>{{ $title ?? 'Admin Section' }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-100">
    <header>
       Header
    </header>

    <main class="container mx-auto mt-4">
        {{ $slot }}
    </main>
</body>
</html>
