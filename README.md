<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Counter App</title>
    <link rel="stylesheet" href="timer.css">
</head>
<body>
    <div class="container">
        <h1>Word Counter App</h1>
        
        <!-- Statistics Section -->
        <div class="statistics-list">
            <div>Words <span id="wordCount">0</span></div>
            <div>Character <span id="charCount">0</span></div>
            <div>Sentences <span id="sentenceCount">0</span></div>
            <div>Reading <span id="readingTime">00 min 00 sec</span></div>
            <div>All (White Space) <span id="whiteSpaceCount">0</span></div>
        </div>

        <!-- Text input area -->
        <textarea id="textInput" placeholder="Write text here"></textarea>

        <!-- Button section -->
        <div class="button-container">
            <button onclick="clearAll()">Clear All</button>
            <button onclick="copyText()">Copy</button>
            <button onclick="toUpperCase()">UpperCase</button>
            <button onclick="toLowerCase()">LowerCase</button>
            <button onclick="removeWhiteSpaces()">White Space</button>
        </div>
    </div>

    <script src="timer.js"></script>
</body>
</html>
