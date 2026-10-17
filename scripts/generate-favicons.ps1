Add-Type -AssemblyName System.Drawing

function Generate-Icon([int]$size, [string]$outPath) {
    $bmp = [System.Drawing.Bitmap]::new($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

    $scale = $size / 64.0

    # Background rounded rect
    $margin = [Math]::Max(1.0, 2.0 * $scale)
    $w = $size - (2.0 * $margin)
    $radius = 14.0 * $scale
    $diameter = $radius * 2.0

    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $path.AddArc([float]$margin, [float]$margin, [float]$diameter, [float]$diameter, 180, 90)
    $path.AddArc([float]($margin + $w - $diameter), [float]$margin, [float]$diameter, [float]$diameter, 270, 90)
    $path.AddArc([float]($margin + $w - $diameter), [float]($margin + $w - $diameter), [float]$diameter, [float]$diameter, 0, 90)
    $path.AddArc([float]$margin, [float]($margin + $w - $diameter), [float]$diameter, [float]$diameter, 90, 90)
    $path.CloseFigure()

    $pt1 = [System.Drawing.PointF]::new(0, 0)
    $pt2 = [System.Drawing.PointF]::new($size, $size)
    $c1 = [System.Drawing.Color]::FromArgb(255, 15, 23, 42)
    $c2 = [System.Drawing.Color]::FromArgb(255, 2, 6, 23)
    $bgBrush = [System.Drawing.Drawing2D.LinearGradientBrush]::new($pt1, $pt2, $c1, $c2)
    $g.FillPath($bgBrush, $path)

    $borderPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(200, 37, 99, 235), [float](2.0 * $scale))
    $g.DrawPath($borderPen, $path)

    # Draw '1' and '0'
    $font = [System.Drawing.Font]::new('Arial', [float](22.0 * $scale), [System.Drawing.FontStyle]::Bold)
    $brushWhite = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
    $brushBlue = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 59, 130, 246))

    $g.DrawString('1', $font, $brushWhite, [float](11.0 * $scale), [float](8.0 * $scale))
    $g.DrawString('0', $font, $brushBlue, [float](29.0 * $scale), [float](8.0 * $scale))

    # Draw chevrons
    $penRed = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(255, 220, 38, 38), [float](3.5 * $scale))
    $penRed.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $penRed.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pointsRed = [System.Drawing.PointF[]]@(
        [System.Drawing.PointF]::new(20.0 * $scale, 48.0 * $scale),
        [System.Drawing.PointF]::new(26.0 * $scale, 42.0 * $scale),
        [System.Drawing.PointF]::new(32.0 * $scale, 48.0 * $scale)
    )
    $g.DrawLines($penRed, $pointsRed)

    $penBlueChevron = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(255, 37, 99, 235), [float](3.5 * $scale))
    $penBlueChevron.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $penBlueChevron.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pointsBlue = [System.Drawing.PointF[]]@(
        [System.Drawing.PointF]::new(30.0 * $scale, 48.0 * $scale),
        [System.Drawing.PointF]::new(36.0 * $scale, 42.0 * $scale),
        [System.Drawing.PointF]::new(42.0 * $scale, 48.0 * $scale)
    )
    $g.DrawLines($penBlueChevron, $pointsBlue)

    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

    if ($size -eq 64) {
        $icoPath = [System.IO.Path]::ChangeExtension($outPath, '.ico')
        $hIcon = $bmp.GetHicon()
        $icon = [System.Drawing.Icon]::FromHandle($hIcon)
        $fileStream = [System.IO.File]::OpenWrite($icoPath)
        $icon.Save($fileStream)
        $fileStream.Close()
        $icon.Dispose()
    }

    $bmp.Dispose()
}

$outDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$publicDir = [System.IO.Path]::GetFullPath((Join-Path $outDir "..\public"))

Generate-Icon 64 (Join-Path $publicDir "favicon.png")
Generate-Icon 32 (Join-Path $publicDir "favicon-32x32.png")
Generate-Icon 16 (Join-Path $publicDir "favicon-16x16.png")
Generate-Icon 180 (Join-Path $publicDir "apple-touch-icon.png")

Write-Output "All favicons generated successfully in $publicDir"
