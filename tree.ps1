param (
    [string]$Path = ".",
    [int]$Depth = 3,
    [string[]]$Exclude = @("node_modules", ".git", ".github"),
    [int]$Level = 0
)

function Show-Tree {
    param (
        [string]$Path,
        [int]$Depth,
        [string[]]$Exclude,
        [int]$Level
    )

    if ($Level -ge $Depth) { return }

    Get-ChildItem -LiteralPath $Path | Sort-Object PSIsContainer, Name | ForEach-Object {
        if ($Exclude -contains $_.Name) { return }

        $prefix = ("  " * $Level) + "|-- "
        Write-Output ($prefix + $_.Name)

        if ($_.PSIsContainer) {
            Show-Tree -Path $_.FullName -Depth $Depth -Exclude $Exclude -Level ($Level + 1)
        }
    }
}

Show-Tree -Path $Path -Depth $Depth -Exclude $Exclude -Level $Level
