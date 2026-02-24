"use client";

import Script from "next/script";

type ZohoWindow = Window & {
  $zoho?: {
    salesiq?: {
      ready?: () => void;
      floatbutton?: { visible?: (state: "show" | "hide") => void };
      floatwindow?: { visible?: (state: "show" | "hide") => void };
      chatwindow?: { visible?: (state: "show" | "hide") => void };
    };
  };
  __openZohoSalesIQ?: () => void;
  __zohoSalesIQOpenQueued?: boolean;
};

const DEFAULT_ZOHO_WIDGET_SRC =
  "https://salesiq.zohopublic.com/widget?wc=siqf4301398e1773926de88bc1be37640349fa45196e1d1cb24b9161791f853ffe5";

function openZohoSupportChat() {
  const win = window as ZohoWindow;

  try {
    win.__openZohoSalesIQ?.();
    return;
  } catch {
    // fall through to a direct API attempt
  }

  try {
    win.$zoho?.salesiq?.floatwindow?.visible?.("show");
    win.$zoho?.salesiq?.chatwindow?.visible?.("show");
    win.$zoho?.salesiq?.floatbutton?.visible?.("hide");
  } catch {
    // no-op: widget may still be loading
  }
}

export default function ZohoSalesIQSupport() {
  const widgetSrc =
    process.env.NEXT_PUBLIC_ZOHO_SALESIQ_WIDGET_SRC?.trim() ||
    DEFAULT_ZOHO_WIDGET_SRC;

  if (!widgetSrc) {
    return null;
  }

  return (
    <>
      <Script id="zoho-salesiq-init" strategy="afterInteractive">
        {`
          (function () {
            window.$zoho = window.$zoho || {};
            window.$zoho.salesiq = window.$zoho.salesiq || {};
            window.__zohoSalesIQOpenQueued = false;

            window.__openZohoSalesIQ = function () {
              try {
                if (window.$zoho && window.$zoho.salesiq) {
                  if (window.$zoho.salesiq.floatbutton && window.$zoho.salesiq.floatbutton.visible) {
                    window.$zoho.salesiq.floatbutton.visible("hide");
                  }
                  if (window.$zoho.salesiq.floatwindow && window.$zoho.salesiq.floatwindow.visible) {
                    window.$zoho.salesiq.floatwindow.visible("show");
                  }
                  if (window.$zoho.salesiq.chatwindow && window.$zoho.salesiq.chatwindow.visible) {
                    window.$zoho.salesiq.chatwindow.visible("show");
                  }
                  return;
                }
              } catch (e) {}
              window.__zohoSalesIQOpenQueued = true;
            };

            window.$zoho.salesiq.ready = function () {
              try {
                if (window.$zoho.salesiq.floatbutton && window.$zoho.salesiq.floatbutton.visible) {
                  window.$zoho.salesiq.floatbutton.visible("hide");
                }
                if (window.__zohoSalesIQOpenQueued) {
                  if (window.$zoho.salesiq.floatwindow && window.$zoho.salesiq.floatwindow.visible) {
                    window.$zoho.salesiq.floatwindow.visible("show");
                  }
                  if (window.$zoho.salesiq.chatwindow && window.$zoho.salesiq.chatwindow.visible) {
                    window.$zoho.salesiq.chatwindow.visible("show");
                  }
                  window.__zohoSalesIQOpenQueued = false;
                }
              } catch (e) {}
            };
          })();
        `}
      </Script>
      <Script
        id="zsiqscript"
        src={widgetSrc}
        strategy="afterInteractive"
        defer
      />

      <button
        type="button"
        onClick={openZohoSupportChat}
        aria-label="Open direct message chat"
        title="Direct message support"
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-deepblue text-white shadow-soft transition hover:translate-y-[-2px]"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-7 w-7 fill-none stroke-current"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H11l-4.5 4v-4H7.5A2.5 2.5 0 0 1 5 13.5z" />
          <path d="M9 9.5h6" />
          <path d="M9 12.5h4" />
        </svg>
      </button>
    </>
  );
}
