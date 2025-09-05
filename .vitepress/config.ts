import { defineConfig } from "vitepress";
import { withI18n } from "vitepress-i18n";
import type { VitePressI18nOptions } from "vitepress-i18n/types";
import { withSidebar } from "vitepress-sidebar";
import type { VitePressSidebarOptions } from "vitepress-sidebar/types";
import brand from "../configs/brand.json";
import sidebar from "../configs/sidebar.json";

const baseConfig =  defineConfig({
  srcDir: "docs",
  base: "/",
  title: brand.title,
  description: brand.description,
  themeConfig: {
    ...brand.navigation
  }
})

// #e5763fff

/** Sidebar configuration for VitePress */
const vitePressSidebarOptions: VitePressSidebarOptions = 	{
		...sidebar,
		documentRootPath: "/docs",
    includeFolderIndexFile: false,
	};
const sideBarConfig = withSidebar(baseConfig, vitePressSidebarOptions);


/** i18n configuration for VitePress */
const vitePressI18nOptions: Partial<VitePressI18nOptions> = {
  locales: [brand.locale],
	searchProvider: "local",
}



export default withI18n(sideBarConfig, vitePressI18nOptions);