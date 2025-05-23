const routeConfig = {
    url: "http://cryptitan.test",
    port: null,
    defaults: {},
    routes: {
        "auth.login": {uri: "auth/login", methods: ["POST"]},
        "auth.register": {uri: "auth/register", methods: ["POST"]},
        "auth.logout": {uri: "auth/logout", methods: ["POST"]},
        "auth.reset-password.reset": {
            uri: "auth/reset-password/reset",
            methods: ["POST"]
        },
        "auth.reset-password.send-email-code": {
            uri: "auth/reset-password/send-email-code",
            methods: ["POST"]
        },
        "auth.reset-password.request-token": {
            uri: "auth/reset-password/request-token",
            methods: ["POST"]
        },
        "wallet.unused": {uri: "wallet/unused", methods: ["GET", "HEAD"]},
        "wallet.transfer-record-paginate": {
            uri: "wallet/transfer-record-paginate",
            methods: ["POST"]
        },
        "wallet.create-account": {
            uri: "wallet/{wallet}/create-account",
            methods: ["POST"],
            bindings: {wallet: "id"}
        },
        "wallet.price": {
            uri: "wallet/{wallet}/price",
            methods: ["GET", "HEAD"],
            bindings: {wallet: "id"}
        },
        "wallet.market-chart": {
            uri: "wallet/{wallet}/market-chart",
            methods: ["POST"],
            bindings: {wallet: "id"}
        },
        "wallet.account.all": {
            uri: "wallet/account/all",
            methods: ["GET", "HEAD"]
        },
        "wallet.account.send": {
            uri: "wallet/account/{id}/send",
            methods: ["POST"]
        },
        "wallet.account.latest-address": {
            uri: "wallet/account/{id}/latest-address",
            methods: ["GET", "HEAD"]
        },
        "wallet.account.estimate-fee": {
            uri: "wallet/account/{id}/estimate-fee",
            methods: ["POST"]
        },
        "wallet.account.generate-address": {
            uri: "wallet/account/{id}/generate-address",
            methods: ["POST"]
        },
        "wallet.account.total-available-price": {
            uri: "wallet/account/total-available-price",
            methods: ["GET", "HEAD"]
        },
        "wallet.account.aggregate-price": {
            uri: "wallet/account/aggregate-price",
            methods: ["GET", "HEAD"]
        },
        "bank.get": {uri: "bank/get", methods: ["GET", "HEAD"]},
        "bank.create-account": {uri: "bank/create-account", methods: ["POST"]},
        "bank.get-accounts": {
            uri: "bank/get-accounts",
            methods: ["GET", "HEAD"]
        },
        "bank.account.delete": {
            uri: "bank/account/{id}/delete",
            methods: ["DELETE"]
        },
        "payment.account": {uri: "payment/account", methods: ["GET", "HEAD"]},
        "payment.deposit-methods": {
            uri: "payment/deposit-methods",
            methods: ["GET", "HEAD"]
        },
        "payment.daily-chart": {
            uri: "payment/daily-chart",
            methods: ["GET", "HEAD"]
        },
        "payment.deposit": {uri: "payment/deposit", methods: ["POST"]},
        "payment.withdraw": {uri: "payment/withdraw", methods: ["POST"]},
        "payment.transaction-paginate": {
            uri: "payment/transaction-paginate",
            methods: ["POST"]
        },
        "user.data": {uri: "user/data", methods: ["GET", "HEAD"]},
        "user.notification-settings": {
            uri: "user/notification-settings",
            methods: ["GET", "HEAD"]
        },
        "user.update-notification-settings": {
            uri: "user/update-notification-settings",
            methods: ["POST"]
        },
        "user.upload-picture": {uri: "user/upload-picture", methods: ["POST"]},
        "user.update": {uri: "user/update", methods: ["POST"]},
        "user.change-password": {
            uri: "user/change-password",
            methods: ["POST"]
        },
        "user.get-two-factor": {uri: "user/get-two-factor", methods: ["POST"]},
        "user.reset-two-factor-token": {
            uri: "user/reset-two-factor-token",
            methods: ["POST"]
        },
        "user.set-two-factor": {uri: "user/set-two-factor", methods: ["POST"]},
        "user.verify-phone-with-token": {
            uri: "user/verify-phone-with-token",
            methods: ["POST"]
        },
        "user.verify-email-with-token": {
            uri: "user/verify-email-with-token",
            methods: ["POST"]
        },
        "user.set-online": {uri: "user/set-online", methods: ["POST"]},
        "user.set-away": {uri: "user/set-away", methods: ["POST"]},
        "user.set-offline": {uri: "user/set-offline", methods: ["POST"]},
        "user.activity-paginate": {
            uri: "user/activity-paginate",
            methods: ["POST"]
        },
        "user.verification.get": {
            uri: "user/verification/get",
            methods: ["GET", "HEAD"]
        },
        "user.verification.upload-document": {
            uri: "user/verification/upload-document",
            methods: ["POST"]
        },
        "user.verification.update-address": {
            uri: "user/verification/update-address",
            methods: ["POST"]
        },
        "user.notification.total-unread": {
            uri: "user/notification/total-unread",
            methods: ["GET", "HEAD"]
        },
        "user.notification.paginate": {
            uri: "user/notification/paginate",
            methods: ["POST"]
        },
        "user.notification.mark-all-as-read": {
            uri: "user/notification/mark-all-as-read",
            methods: ["POST"]
        },
        "user.notification.clear": {
            uri: "user/notification/clear",
            methods: ["POST"]
        },
        "user.notification.mark-as-read": {
            uri: "user/notification/{id}/mark-as-read",
            methods: ["PATCH"]
        },
        "exchange-trade.calculate-buy": {
            uri: "exchange-trade/calculate-buy",
            methods: ["POST"]
        },
        "exchange-trade.buy": {uri: "exchange-trade/buy", methods: ["POST"]},
        "exchange-trade.calculate-sell": {
            uri: "exchange-trade/calculate-sell",
            methods: ["POST"]
        },
        "exchange-trade.sell": {uri: "exchange-trade/sell", methods: ["POST"]},
        "exchange-trade.paginate": {
            uri: "exchange-trade/paginate",
            methods: ["POST"]
        },
        "giftcard.get": {uri: "giftcard/get", methods: ["GET", "HEAD"]},
        "giftcard.purchase": {uri: "giftcard/purchase", methods: ["POST"]},
        "giftcard.paginate": {uri: "giftcard/paginate", methods: ["POST"]},
        "giftcard.content.paginate": {
            uri: "giftcard/content/paginate",
            methods: ["POST"]
        },
        "giftcard.brand.all": {
            uri: "giftcard/brand/all",
            methods: ["GET", "HEAD"]
        },
        "feature-limit.all": {
            uri: "feature-limit/all",
            methods: ["GET", "HEAD"]
        },
        "email-verification.send": {
            uri: "email/verification-notification",
            methods: ["POST"]
        },
        "token.send-phone": {uri: "token/send-phone", methods: ["POST"]},
        "token.send-email": {uri: "token/send-email", methods: ["POST"]},
        "grid.set-dimensions": {uri: "grid/set-dimensions", methods: ["POST"]},
        "grid.all": {uri: "grid/all", methods: ["POST"]},
        "admin.statistics.total-users": {
            uri: "admin/statistics/total-users",
            methods: ["GET", "HEAD"]
        },
        "admin.statistics.total-earnings": {
            uri: "admin/statistics/total-earnings",
            methods: ["GET", "HEAD"]
        },
        "admin.statistics.pending-verification": {
            uri: "admin/statistics/pending-verification",
            methods: ["GET", "HEAD"]
        },
        "admin.statistics.pending-deposit": {
            uri: "admin/statistics/pending-deposit",
            methods: ["GET", "HEAD"]
        },
        "admin.statistics.pending-withdrawal": {
            uri: "admin/statistics/pending-withdrawal",
            methods: ["GET", "HEAD"]
        },
        "admin.statistics.registration-chart": {
            uri: "admin/statistics/registration-chart",
            methods: ["GET", "HEAD"]
        },
        "admin.statistics.system-status": {
            uri: "admin/statistics/system-status",
            methods: ["GET", "HEAD"]
        },
        "admin.statistics.latest-users": {
            uri: "admin/statistics/latest-users",
            methods: ["GET", "HEAD"]
        },
        "admin.user.paginate": {uri: "admin/user/paginate", methods: ["POST"]},
        "admin.user.batch-deactivate": {
            uri: "admin/user/batch-deactivate",
            methods: ["POST"]
        },
        "admin.user.batch-activate": {
            uri: "admin/user/batch-activate",
            methods: ["POST"]
        },
        "admin.user.activate": {
            uri: "admin/user/{user}/activate",
            methods: ["POST"],
            bindings: {user: "id"}
        },
        "admin.user.deactivate": {
            uri: "admin/user/{user}/deactivate",
            methods: ["POST"],
            bindings: {user: "id"}
        },
        "admin.user.verification.address-paginate": {
            uri: "admin/user/verification/address-paginate",
            methods: ["POST"]
        },
        "admin.user.verification.document-paginate": {
            uri: "admin/user/verification/document-paginate",
            methods: ["POST"]
        },
        "admin.user.verification.approve-document": {
            uri: "admin/user/verification/{document}/approve-document",
            methods: ["POST"],
            bindings: {document: "id"}
        },
        "admin.user.verification.reject-document": {
            uri: "admin/user/verification/{document}/reject-document",
            methods: ["POST"],
            bindings: {document: "id"}
        },
        "admin.user.verification.download-document": {
            uri: "admin/user/verification/{document}/download-document",
            methods: ["GET", "HEAD"],
            bindings: {document: "id"}
        },
        "admin.user.verification.approve-address": {
            uri: "admin/user/verification/{address}/approve-address",
            methods: ["POST"],
            bindings: {address: "id"}
        },
        "admin.user.verification.reject-address": {
            uri: "admin/user/verification/{address}/reject-address",
            methods: ["POST"],
            bindings: {address: "id"}
        },
        "admin.role.paginate": {uri: "admin/role/paginate", methods: ["POST"]},
        "admin.role.create": {uri: "admin/role/create", methods: ["POST"]},
        "admin.role.delete": {
            uri: "admin/role/{role}/delete",
            methods: ["DELETE"],
            bindings: {role: "id"}
        },
        "admin.role.update": {
            uri: "admin/role/{role}/update",
            methods: ["PUT"],
            bindings: {role: "id"}
        },
        "admin.role.get-permissions": {
            uri: "admin/role/get-permissions",
            methods: ["GET", "HEAD"]
        },
        "admin.role.all": {uri: "admin/role/all", methods: ["GET", "HEAD"]},
        "admin.role.assign": {
            uri: "admin/role/assign/{user}",
            methods: ["POST"]
        },
        "admin.wallet.create": {uri: "admin/wallet/create", methods: ["POST"]},
        "admin.wallet.delete": {
            uri: "admin/wallet/{identifier}/delete",
            methods: ["DELETE"]
        },
        "admin.wallet.consolidate": {
            uri: "admin/wallet/{identifier}/consolidate",
            methods: ["POST"]
        },
        "admin.wallet.relay-transaction": {
            uri: "admin/wallet/{identifier}/relay-transaction",
            methods: ["POST"]
        },
        "admin.wallet.reset-webhook": {
            uri: "admin/wallet/{identifier}/reset-webhook",
            methods: ["POST"]
        },
        "admin.wallet.get-adapters": {
            uri: "admin/wallet/get-adapters",
            methods: ["GET", "HEAD"]
        },
        "admin.wallet.paginate": {
            uri: "admin/wallet/paginate",
            methods: ["POST"]
        },
        "admin.wallet.get-withdrawal-fees": {
            uri: "admin/wallet/get-withdrawal-fees",
            methods: ["GET", "HEAD"]
        },
        "admin.wallet.update-withdrawal-fees": {
            uri: "admin/wallet/update-withdrawal-fees",
            methods: ["POST"]
        },
        "admin.wallet.get-exchange-fees": {
            uri: "admin/wallet/get-exchange-fees",
            methods: ["GET", "HEAD"]
        },
        "admin.wallet.update-exchange-fees": {
            uri: "admin/wallet/update-exchange-fees",
            methods: ["POST"]
        },
        "admin.wallet.transfer-record.paginate": {
            uri: "admin/wallet/transfer-record/paginate",
            methods: ["POST"]
        },
        "admin.wallet.transfer-record.remove": {
            uri: "admin/wallet/transfer-record/{record}/remove",
            methods: ["POST"],
            bindings: {record: "id"}
        },
        "admin.payment.get-currencies": {
            uri: "admin/payment/get-currencies",
            methods: ["GET", "HEAD"]
        },
        "admin.payment.supported-currency.paginate": {
            uri: "admin/payment/supported-currency/paginate",
            methods: ["POST"]
        },
        "admin.payment.supported-currency.create": {
            uri: "admin/payment/supported-currency/create",
            methods: ["POST"]
        },
        "admin.payment.supported-currency.update": {
            uri: "admin/payment/supported-currency/{currency}/update",
            methods: ["POST"],
            bindings: {currency: "id"}
        },
        "admin.payment.supported-currency.make-default": {
            uri: "admin/payment/supported-currency/{currency}/make-default",
            methods: ["POST"],
            bindings: {currency: "id"}
        },
        "admin.payment.supported-currency.delete": {
            uri: "admin/payment/supported-currency/{currency}/delete",
            methods: ["DELETE"],
            bindings: {currency: "id"}
        },
        "admin.payment.transaction.paginate": {
            uri: "admin/payment/transaction/paginate",
            methods: ["POST"]
        },
        "admin.payment.transaction.pending-transfer-receive-paginate": {
            uri: "admin/payment/transaction/pending-transfer-receive-paginate",
            methods: ["POST"]
        },
        "admin.payment.transaction.pending-transfer-send-paginate": {
            uri: "admin/payment/transaction/pending-transfer-send-paginate",
            methods: ["POST"]
        },
        "admin.payment.transaction.complete-transfer": {
            uri: "admin/payment/transaction/{transaction}/complete-transfer",
            methods: ["POST"],
            bindings: {transaction: "id"}
        },
        "admin.payment.transaction.cancel-transfer": {
            uri: "admin/payment/transaction/{transaction}/cancel-transfer",
            methods: ["POST"],
            bindings: {transaction: "id"}
        },
        "admin.bank.create": {uri: "admin/bank/create", methods: ["POST"]},
        "admin.bank.get-available-countries": {
            uri: "admin/bank/get-available-countries",
            methods: ["GET", "HEAD"]
        },
        "admin.bank.get-operating-banks": {
            uri: "admin/bank/get-operating-banks",
            methods: ["GET", "HEAD"]
        },
        "admin.bank.paginate": {uri: "admin/bank/paginate", methods: ["POST"]},
        "admin.bank.update": {
            uri: "admin/bank/{bank}/update",
            methods: ["PUT"],
            bindings: {bank: "id"}
        },
        "admin.bank.set-logo": {
            uri: "admin/bank/{bank}/set-logo",
            methods: ["POST"],
            bindings: {bank: "id"}
        },
        "admin.bank.delete": {
            uri: "admin/bank/{bank}/delete",
            methods: ["DELETE"],
            bindings: {bank: "id"}
        },
        "admin.bank.operating-country.paginate": {
            uri: "admin/bank/operating-country/paginate",
            methods: ["POST"]
        },
        "admin.bank.operating-country.create": {
            uri: "admin/bank/operating-country/create",
            methods: ["POST"]
        },
        "admin.bank.operating-country.delete": {
            uri: "admin/bank/operating-country/{country}/delete",
            methods: ["DELETE"],
            bindings: {country: "id"}
        },
        "admin.bank.account.paginate": {
            uri: "admin/bank/account/paginate",
            methods: ["POST"]
        },
        "admin.bank.account.create": {
            uri: "admin/bank/account/create",
            methods: ["POST"]
        },
        "admin.bank.account.delete": {
            uri: "admin/bank/account/{account}/delete",
            methods: ["DELETE"],
            bindings: {account: "id"}
        },
        "admin.exchange-trade.paginate": {
            uri: "admin/exchange-trade/paginate",
            methods: ["POST"]
        },
        "admin.exchange-trade.complete-pending-buy": {
            uri: "admin/exchange-trade/{trade}/complete-pending-buy",
            methods: ["PATCH"],
            bindings: {trade: "id"}
        },
        "admin.exchange-trade.cancel-pending": {
            uri: "admin/exchange-trade/{trade}/cancel-pending",
            methods: ["PATCH"],
            bindings: {trade: "id"}
        },
        "admin.giftcard.paginate": {
            uri: "admin/giftcard/paginate",
            methods: ["POST"]
        },
        "admin.giftcard.create": {
            uri: "admin/giftcard/create",
            methods: ["POST"]
        },
        "admin.giftcard.update": {
            uri: "admin/giftcard/{giftcard}/update",
            methods: ["PUT"],
            bindings: {giftcard: "id"}
        },
        "admin.giftcard.upload-thumbnail": {
            uri: "admin/giftcard/{giftcard}/upload-thumbnail",
            methods: ["POST"],
            bindings: {giftcard: "id"}
        },
        "admin.giftcard.delete": {
            uri: "admin/giftcard/{giftcard}/delete",
            methods: ["DELETE"],
            bindings: {giftcard: "id"}
        },
        "admin.giftcard.content.paginate": {
            uri: "admin/giftcard/{giftcard}/content/paginate",
            methods: ["POST"],
            bindings: {giftcard: "id"}
        },
        "admin.giftcard.content.create": {
            uri: "admin/giftcard/{giftcard}/content/create",
            methods: ["POST"],
            bindings: {giftcard: "id"}
        },
        "admin.giftcard.content.delete": {
            uri: "admin/giftcard/{giftcard}/content/{content}/delete",
            methods: ["DELETE"],
            bindings: {giftcard: "id"}
        },
        "admin.giftcard.content.purchased-paginate": {
            uri: "admin/giftcard/content/purchased-paginate",
            methods: ["POST"]
        },
        "admin.giftcard.brand.all": {
            uri: "admin/giftcard/brand/all",
            methods: ["GET", "HEAD"]
        },
        "admin.giftcard.brand.paginate": {
            uri: "admin/giftcard/brand/paginate",
            methods: ["POST"]
        },
        "admin.giftcard.brand.create": {
            uri: "admin/giftcard/brand/create",
            methods: ["POST"]
        },
        "admin.giftcard.brand.delete": {
            uri: "admin/giftcard/brand/{brand}/delete",
            methods: ["DELETE"],
            bindings: {brand: "id"}
        },
        "admin.giftcard.brand.update": {
            uri: "admin/giftcard/brand/{brand}/update",
            methods: ["PUT"],
            bindings: {brand: "id"}
        },
        "admin.locale.get": {uri: "admin/locale/get", methods: ["GET", "HEAD"]},
        "admin.locale.remove": {uri: "admin/locale/remove", methods: ["POST"]},
        "admin.locale.add": {uri: "admin/locale/add", methods: ["POST"]},
        "admin.locale.import": {uri: "admin/locale/import", methods: ["POST"]},
        "admin.locale.group.get": {
            uri: "admin/locale/group/{group}/get",
            methods: ["GET", "HEAD"]
        },
        "admin.locale.group.update": {
            uri: "admin/locale/group/{group}/update",
            methods: ["PATCH"]
        },
        "admin.locale.group.export": {
            uri: "admin/locale/group/{group}/export",
            methods: ["POST"]
        },
        "admin.theme.set-mode": {
            uri: "admin/theme/set-mode",
            methods: ["POST"]
        },
        "admin.theme.set-direction": {
            uri: "admin/theme/set-direction",
            methods: ["POST"]
        },
        "admin.theme.set-color": {
            uri: "admin/theme/set-color",
            methods: ["POST"]
        },
        "admin.brand.upload-favicon": {
            uri: "admin/brand/upload-favicon",
            methods: ["POST"]
        },
        "admin.brand.update-social-links": {
            uri: "admin/brand/update-social-links",
            methods: ["POST"]
        },
        "admin.brand.upload-logo": {
            uri: "admin/brand/upload-logo",
            methods: ["POST"]
        },
        "admin.settings.get-general": {
            uri: "admin/settings/get-general",
            methods: ["GET", "HEAD"]
        },
        "admin.settings.update-general": {
            uri: "admin/settings/update-general",
            methods: ["POST"]
        },
        "admin.settings.get-service": {
            uri: "admin/settings/get-service",
            methods: ["GET", "HEAD"]
        },
        "admin.settings.update-service": {
            uri: "admin/settings/update-service",
            methods: ["POST"]
        },
        "admin.feature-limit.get": {
            uri: "admin/feature-limit/get",
            methods: ["GET", "HEAD"]
        },
        "admin.feature-limit.update": {
            uri: "admin/feature-limit/update",
            methods: ["POST"]
        },
        "admin.feature-limit.get-settings": {
            uri: "admin/feature-limit/get-settings",
            methods: ["GET", "HEAD"]
        },
        "admin.feature-limit.update-settings": {
            uri: "admin/feature-limit/update-settings",
            methods: ["POST"]
        },
        "admin.required-document.paginate": {
            uri: "admin/required-document/paginate",
            methods: ["POST"]
        },
        "admin.required-document.create": {
            uri: "admin/required-document/create",
            methods: ["POST"]
        },
        "admin.required-document.delete": {
            uri: "admin/required-document/{document}/delete",
            methods: ["DELETE"],
            bindings: {document: "id"}
        },
        "admin.required-document.update": {
            uri: "admin/required-document/{document}/update",
            methods: ["PUT"],
            bindings: {document: "id"}
        },
        "admin.system-logs.paginate": {
            uri: "admin/system-logs/paginate",
            methods: ["POST"]
        },
        "admin.system-logs.mark-all-as-seen": {
            uri: "admin/system-logs/mark-all-as-seen",
            methods: ["POST"]
        },
        "admin.system-logs.mark-as-seen": {
            uri: "admin/system-logs/{log}/mark-as-seen",
            methods: ["POST"],
            bindings: {log: "id"}
        },
        "global.wallets": {uri: "global/wallets", methods: ["GET", "HEAD"]},
        "global.supported-currencies": {
            uri: "global/supported-currencies",
            methods: ["GET", "HEAD"]
        },
        "global.countries": {uri: "global/countries", methods: ["GET", "HEAD"]},
        "global.operating-countries": {
            uri: "global/operating-countries",
            methods: ["GET", "HEAD"]
        },
        "ip.info": {uri: "ip/info", methods: ["POST"]},
        "locale.set": {uri: "locale/set", methods: ["POST"]},
        "locale.get": {uri: "locale/get", methods: ["POST"]},
        "installer.": {uri: "installer", methods: ["GET", "HEAD"]},
        "installer.register": {uri: "installer/register", methods: ["POST"]},
        "installer.install": {uri: "installer/install", methods: ["POST"]}
    }
};

export default routeConfig;
