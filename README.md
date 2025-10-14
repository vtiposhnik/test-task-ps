## Previous architecture with .module.scss files

lewpi@fedora:~/WebstormProjects/test-task-ps$ find src/components | sed -e "s/[^-][^\/]_\// |/g" -e "s/|\([^ ]\)/|-\1/"
|-components
| |-layout
| | |-Header
| | | |-NotificationIndicator
| | | | |-NotificationIndicator.component.tsx
| | | | |-NotificationIndicator.module.scss
| | | |-Header.component.tsx
| | | |-Header.module.scss
| | |-Sidebar
| | | |-Sidebar.component.tsx
| | | |-sidebar.module.scss
| | | |-Sidebar.config.ts
| | | |-drawers
| | | | |-menu.drawers.tsx
| | | | |-help.drawer.tsx
| | | | |-drawers.component.tsx
| | | | |-drawers.types.ts
| | | | |-language.drawer.tsx
| | | | |-drawers.config.ts
| | | |-hooks
| | | | |-useSidebarController.hook.tsx
| | | |-Sidebar.types.ts
| | | |-SidebarItem
| | | | |-SidebarItem.component.tsx
| | | | |-SidebarItem.module.scss
| | | |-SidebarNav
| | | | |-SidebarNav.component.tsx
| | | | |-SidebarNav.module.scss
| |-icons
| | |-common.ts
| | |-formIcons.ts
| |-form
| | |-ResourceInput
| | | |-ResourceInput.component.tsx
| | | |-ResourceInput.module.scss
| | |-CountInput
| | | |-CountInput.component.tsx
| | | |-CountInput.module.scss
lewpi@fedora:~/WebstormProjects/test-task-ps$ find src/app | sed -e "s/[^-][^\/]_\// |/g" -e "s/|\([^ ]\)/|-\1/"
|-app
| |-layout.tsx
| |-layout.module.scss
| |-platform
| | |-layout.tsx
| | |-page.tsx
| | |-layout.module.scss
| | |-(components)
| | | |-ResourceControl
| | | | |-ResourceControl.component.tsx
| | | | |-ResourceControl.module.scss
| | | |-FeatureCard
| | | | |-FeatureCard.component.tsx
| | | | |-FeatureCard.module.scss
| | |-page.config.ts



## brief project description


