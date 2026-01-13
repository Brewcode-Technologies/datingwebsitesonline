$files = @(
    "app\api\admin\account-requests\route.ts",
    "app\api\admin\account-requests-summary\route.ts",
    "app\api\admin\analytics\route.ts",
    "app\api\admin\approve-account\route.ts",
    "app\api\admin\business-accounts\approve\route.ts",
    "app\api\admin\business-accounts\route.ts",
    "app\api\admin\manage-user\route.ts",
    "app\api\admin\notifications\route.ts",
    "app\api\admin\notifications\sent\route.ts",
    "app\api\admin\notifications\[id]\route.ts",
    "app\api\admin\orders\route.ts",
    "app\api\admin\orders\[id]\route.ts",
    "app\api\admin\premium-accounts\approve\route.ts",
    "app\api\admin\premium-accounts\route.ts",
    "app\api\admin\products\route.ts",
    "app\api\admin\reject-account\route.ts",
    "app\api\admin\reviews\route.ts",
    "app\api\admin\stats\route.ts",
    "app\api\admin\subscriptions\cleanup-duplicates\route.ts",
    "app\api\admin\subscriptions\route.ts",
    "app\api\admin\subscriptions\[id]\route.ts",
    "app\api\admin\users\combined\route.ts",
    "app\api\admin\users\sync-to-sanity\route.ts",
    "app\api\admin\users\[userId]\activate\route.ts",
    "app\api\admin\users\[userId]\delete-sanity\route.ts",
    "app\api\checkout\clerk\complete\route.ts",
    "app\api\orders\addresses\route.ts",
    "app\api\orders\count\route.ts",
    "app\api\orders\refund\route.ts",
    "app\api\orders\route.ts",
    "app\api\orders\[orderId]\generate-invoice\route.ts",
    "app\api\orders\[orderId]\pay\route.ts",
    "app\api\orders\[orderId]\pay-now\route.ts",
    "app\api\user\business-apply\route.ts",
    "app\api\user\cancel-application\route.ts",
    "app\api\user\combined-data\route.ts",
    "app\api\user\reviews\route.ts",
    "app\api\user\status\route.ts",
    "components\CategoryPageWrapper.tsx",
    "components\ProductGrid.tsx",
    "lib\notificationService.ts"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processing $file"
        $content = Get-Content $file -Raw
        $content = $content -replace 'import \{ client \} from "@/sanity/lib/client";', 'import { backendClient as client } from "@/sanity/lib/backendClient";'
        $content = $content -replace 'import \{ writeClient \} from "@/sanity/lib/client";', 'import { backendClient as writeClient } from "@/sanity/lib/backendClient";'
        $content = $content -replace 'import \{ writeClient, client \} from "@/sanity/lib/client";', 'import { backendClient as client, backendClient as writeClient } from "@/sanity/lib/backendClient";'
        $content = $content -replace 'import \{ client, writeClient \} from "@/sanity/lib/client";', 'import { backendClient as client, backendClient as writeClient } from "@/sanity/lib/backendClient";'
        Set-Content $file $content
    }
}