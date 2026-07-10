# build/installer.nsh

NSIS installer customization script for update behavior, shortcut placement, old install detection, and setup details.

## Quick Facts

- Lines: 570
- Size: 29,416 bytes
- Talks to: local backend, GitHub/release layer
- API endpoints mentioned: 0
- Named functions discovered: 0

## Communication Role

This section explains how the file participates in the app. If it mentions `template-preview.js`, it likely affects the private builder UI. If it mentions `server.mjs`, it likely calls or implements local backend APIs. If it mentions `script.js`, it affects the public website. If it mentions GitHub, Cloudflare, or Workers, it participates in publishing, releases, or public AI.

## Representative Opening Snippet

```
!include LogicLib.nsh
!include nsDialogs.nsh
!include WinMessages.nsh
!include WordFunc.nsh

!ifndef BUILD_UNINSTALLER
Var OMB_ToolsDialog
Var OMB_ShortcutCheckbox
Var OMB_PublishingToolsCheckbox
Var OMB_CreateDesktopShortcutState
Var OMB_InstallPublishingToolsState
Var OMB_ExistingInstallLocation
Var OMB_ExistingInstallVersion
Var OMB_IsUpdateInstall
Var OMB_ManualApplicationInstall

Function OMBToolsPageCreate
  nsDialogs::Create 1018
  Pop $OMB_ToolsDialog
  ${If} $OMB_ToolsDialog == error
    Abort
  ${EndIf}

  ${NSD_CreateLabel} 0 0 100% 12u "Tools and shortcuts"
  Pop $0

  ${NSD_CreateLabel} 0 18u 100% 36u "The desktop app includes its own runtime. Users do not need to install Node.js or pnpm.$\r$\nGit for Windows with Git Credential Manager is only needed when publishing to GitHub."
  Pop $0

  ${NSD_CreateCheckbox} 0 62u 100% 12u "Create a desktop shortcut"
  Pop $OMB_ShortcutCheckbox
  ${If} $OMB_CreateDesktopShortcutState == ""
    StrCpy $OMB_CreateDesktopShortcutState ${BST_CHECKED}
  ${EndIf}
  ${If} $OMB_CreateDesktopShortcutState == ${BST_CHECKED}
    ${NSD_Check} $OMB_ShortcutCheckbox
```

## Debugging Questions

- What user action reaches this file?
- What state, file, endpoint, or DOM element does this file read?
- What state, file, endpoint, or DOM element does it write?
- If it fails, what is the smallest command or click that reproduces the failure?