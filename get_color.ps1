
Add-Type -AssemblyName System.Drawing
$imgPath = "C:\Users\SKILL GOVINDAN\.gemini\antigravity\brain\5402c426-0614-4e88-baf6-eadd01ee28f6\.user_uploaded\media_1790315360569.png"
$bmp = New-Object System.Drawing.Bitmap($imgPath)
$width = $bmp.Width
$height = $bmp.Height

$colors = @{}

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $color = $bmp.GetPixel($x, $y)
        if ($color.B -gt 150 -and $color.R -lt 100 -and $color.G -lt 150) {
            $hex = "#{0:X2}{1:X2}{2:X2}" -f $color.R, $color.G, $color.B
            if (-not $colors.ContainsKey($hex)) {
                $colors[$hex] = 0
            }
            $colors[$hex]++
        }
    }
}
$bmp.Dispose()

# Get the most frequent blue-ish color
$mostFrequent = $colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 1
Write-Host "Most frequent blue hex: $($mostFrequent.Name)"
Write-Host "Count: $($mostFrequent.Value)"

