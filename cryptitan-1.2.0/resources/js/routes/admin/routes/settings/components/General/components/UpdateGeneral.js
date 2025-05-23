import React, {useCallback, useEffect, useState} from "react";
import {defineMessages, FormattedMessage, useIntl} from "react-intl";
import Form, {TextField} from "components/Form";
import {errorHandler, route, useFormRequest, useRequest} from "services/Http";
import {notify} from "utils/index";
import {isEmpty} from "lodash";
import {
    Card,
    CardContent,
    CardHeader,
    InputAdornment,
    Stack,
    Typography
} from "@mui/material";
import Spin from "components/Spin";
import {LoadingButton} from "@mui/lab";

const messages = defineMessages({
    title: {defaultMessage: "General Settings"},
    enableSms: {defaultMessage: "Enable sms"},
    enableDatabase: {defaultMessage: "Enable bell"},
    enableEmail: {defaultMessage: "Enable email"},
    minPayment: {defaultMessage: "Minimum"},
    maxPayment: {defaultMessage: "Maximum"},
    priceCache: {defaultMessage: "Price Interval"},
    userSetup: {defaultMessage: "Require user setup after registration"},
    success: {defaultMessage: "Settings was updated."}
});

const UpdateGeneral = () => {
    const [form] = Form.useForm();
    const intl = useIntl();
    const [request, loading] = useRequest();
    const [formRequest, formLoading] = useFormRequest(form);
    const [settings, setSettings] = useState({});

    const fetchSettings = useCallback(() => {
        request
            .get(route("admin.settings.get-general"))
            .then((data) => setSettings(data))
            .catch(errorHandler());
    }, [request]);

    useEffect(() => {
        fetchSettings();
    }, [fetchSettings]);

    const submitForm = useCallback(
        (values) => {
            formRequest
                .post(route("admin.settings.update-general"), values)
                .then(() => {
                    notify.success(intl.formatMessage(messages.success));
                    fetchSettings();
                })
                .catch(errorHandler());
        },
        [formRequest, intl, fetchSettings]
    );

    useEffect(() => {
        if (!isEmpty(settings)) {
            form.resetFields();
        }
    }, [settings, form]);

    const paymentInputField = (
        <TextField
            type="number"
            fullWidth
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">USD</InputAdornment>
                )
            }}
        />
    );

    return (
        <Card>
            <CardHeader title={intl.formatMessage(messages.title)} />

            <CardContent>
                <Form form={form} onFinish={submitForm}>
                    <Spin spinning={loading}>
                        <Stack spacing={2}>
                            <Typography variant="overline">
                                <FormattedMessage defaultMessage="Payment" />
                            </Typography>

                            <Form.Item
                                name="min_payment"
                                initialValue={settings.min_payment}
                                label={intl.formatMessage(messages.minPayment)}
                                rules={[{required: true}]}>
                                {paymentInputField}
                            </Form.Item>

                            <Form.Item
                                name="max_payment"
                                initialValue={settings.max_payment}
                                label={intl.formatMessage(messages.maxPayment)}
                                rules={[{required: true}]}>
                                {paymentInputField}
                            </Form.Item>
                        </Stack>

                        <Stack spacing={2} sx={{mt: 3}}>
                            <Typography variant="overline">
                                <FormattedMessage defaultMessage="Wallet" />
                            </Typography>

                            <Form.Item
                                name="price_cache"
                                initialValue={settings.price_cache}
                                label={intl.formatMessage(messages.priceCache)}
                                rules={[{required: true}]}>
                                <TextField
                                    type="number"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                seconds
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Form.Item>
                        </Stack>

                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            sx={{mt: 2}}>
                            <LoadingButton
                                variant="contained"
                                type="submit"
                                loading={formLoading}>
                                <FormattedMessage defaultMessage="Save Changes" />
                            </LoadingButton>
                        </Stack>
                    </Spin>
                </Form>
            </CardContent>
        </Card>
    );
};

export default UpdateGeneral;
