# Modern Angular - Standalone Components

This exercise focuses on the new `standalone` components API introduced with angular 14.

## Goal

In this exercise you will learn how to transition from an existing `NgModule` based application into a `standalone`
application. In the end we won't have an `AppModule` anymore as we will use the new `bootstrapApplication` API
to make our `AppComponent` standalone.

## Standalone Application with the cli

The angular cli provides schematics to easily migrate you application to standalone. In the terminal run the following command: 

```bash

ng generate @angular/core:standalone

```

And select `Convert all components, directives and pipes to standalone`

This command will search through you application for and modules in the path and convert the components to standalone. In this case it will migrate the AppShellComponent.

Inspect the changes done to the component:

<details>
  <summary>Standalone AppShellComponent</summary>

@Component({
  // ...
  standalone: true,
  imports: [
    SideDrawerComponent,
    RouterLinkActive,
    RouterLink,
    FastSvgComponent,
    HamburgerButtonComponent,
    SearchBarComponent,
    FormsModule,
    DarkModeToggleComponent,
    AsyncPipe,
  ],
})
export class AppShellComponent { ... }

</details>

Now run the command again but select `Remove unnecessary NgModule classes`.

This time it will go through the application and replace the imports of the unnecessary modules with their components and delete the modules.

Inspect the change and validate: 

<details>
  <summary>Standalone AppShellComponent</summary>

imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  // Removed AppShellModule but did not replace with its component
  // Add AppShellComponent to the imports to fix the error
  FastSvgModule.forRoot({
    url: (name: string) => `assets/svg-icons/${name}.svg`,
    defaultSize: '12',
  }),
],

</details>

After fixing the error you can now run the command one last time and select `Bootstrap the application using standalone APIs`.

Inspect the changes to `main.ts` it should now be using `bootstrapApplication`:

<details>
  <summary>bootstrapApplication</summary>

```ts
// main.ts

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
```

</details>
