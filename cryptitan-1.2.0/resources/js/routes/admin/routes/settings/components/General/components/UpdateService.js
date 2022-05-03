import React, {useCallback, useEffect, useState} from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Stack,
    Switch,
    Typography
} from "@mui/material";
import {defineMessages, FormattedMessage, useIntl} from "react-intl";
import Form, {ControlLabel} from "components/Form";
import {errorHandler, route, useFormRequest, useRequest} from "services/Http";
import {notify} from "utils/index";
import {isEmpty} from "lodash";
import Spin from "components/Spin";
import {LoadingButton} from "@mui/lab";

const messages = defineMessages({
    title: {defaultMessage: "Service Settings"},
    enableSms: {defaultMessage: "Enable SMS"},
    enableDatabase: {defaultMessage: "Enable Database"},
    enableEmail: {defaultMessage: "Enable Email"},
    userSetup: {defaultMessage: "Require user setup"},
    success: {defaultMessage: "Settings was updated."}
});

const UpdateService = () => {
    const [form] = Form.useForm();
    const intl = useIntl();
    const [request, loading] = useRequest();
    const [formRequest, formLoading] = useFormRequest(form);
    const [settings, setSettings] = useState({});

    const fetchSettings = useCallback(() => {
        request
            .get(route("admin.settings.get-service"))
            .then((data) => setSettings(data))
            .catch(errorHandler());
    }, [request]);

    useEffect(() => {
        fetchSettings();
    }, [fetchSettings]);

    const submitForm = useCallback(
        (values) => {
            formRequest
                .post(route("admin.settings.update-service"), values)
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

    return (
        <Card>
            <CardHeader title={intl.formatMessage(messages.title)} />

            <CardContent>
                <Form form={form} onFinish={submitForm}>
                    <Spin spinning={loading}>
                        <Stack>
                            <Typography variant="overline">
                                <FormattedMessage defaultMessage="Notifications" />
                            </Typography>

                            <Form.Item
                                name="enable_sms"
                                initialValue={settings.enable_sms}
                                label={intl.formatMessage(messages.enableSms)}
                                valuePropName="checked">
                                <ControlLabel>
                                    <Switch />
                                </ControlLabel>
                            </Form.Item>

                            <Form.Item
                                name="enable_database"
                                initialValue={settings.enable_database}
                                label={intl.formatMessage(
                                    messages.enableDatabase
                                )}
                                valuePropName="checked">
                                <ControlLabel>
                                    <Switch />
                                </ControlLabel>
                            </Form.Item>

                            <Form.Item
                                name="enable_mail"
                                initialValue={settings.enable_mail}
                                label={intl.formatMessage(messages.enableEmail)}
                                valuePropName="checked">
                                <ControlLabel>
                                    <Switch />
                                </ControlLabel>
                            </Form.Item>
                        </Stack>

                        <Stack sx={{mt: 3}}>
                            <Typography variant="overline">
                                <FormattedMessage defaultMessage="Other Settings" />
                            </Typography>

                            <Form.Item
                                name="user_setup"
                                initialValue={settings.user_setup}
                                label={intl.formatMessage(messages.userSetup)}
                                valuePropName="checked">
                                <ControlLabel>
                                    <Switch />
                                </ControlLabel>
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

export default UpdateService;
