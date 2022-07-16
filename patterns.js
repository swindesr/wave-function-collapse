function serialize(pattern) {
    return pattern.map(pixel => pixel.join(',')).join(':')
}

// TODO: Symmetry
function getPatterns(pixels, n, width, height) {
    const patterns = [];
    const visited = new Set();

    console.log(width, height)
    for (let r = 0; r <= height - n; ++r) {
        for (let c = 0; c <= width - n; ++c) {
            const pattern = [];
            for (let i = 0; i < n; ++i) {
                for (let j = 0; j < n; ++j) {
                    const x = c + j;
                    const y = r + i;
                    const pixel = [
                        pixels[y * width * 4 + x * 4],
                        pixels[y * width * 4 + x * 4 + 1],
                        pixels[y * width * 4 + x * 4 + 3],
                        pixels[y * width * 4 + x * 4 + 2],
                    ];
                    pattern.push(pixel);
                }
            }

            const serializedPattern = serialize(pattern);

            if (!visited.has(serializedPattern)) {
                patterns.push(pattern);
                visited.add(serializedPattern);
            }
        }
    }

    return patterns;
}