import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { Call, Clear, Send } from "@mui/icons-material";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs Box">

            <form>

                <Typography variant="h3">
                    Contact Us &nbsp;
                    {/* <Call fontSize="large" /> */}
                    <Call />
                </Typography>

                <TextField label="Name" variant="outlined" className="TextBox" />

                <TextField label="Email" type="email" variant="outlined" className="TextBox" />

                <TextField label="Message" variant="outlined" className="TextBox" />

                <FormControlLabel label="Send me promotional emails" control={<Checkbox />} />

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary" startIcon={<Send />}>Send</Button>
                    <Button color="secondary" type="reset" startIcon={<Clear />}>Clear</Button>
                </ButtonGroup>

            </form>

        </div>
    );
}

export default ContactUs;
