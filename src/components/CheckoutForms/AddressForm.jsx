import React, { useState, useRef} from 'react'
import { TextField, Typography, InputAdornment, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'
import useStyles from './styles'



function AddressForm(props) {
    const classes = useStyles()
    const [region, setRegion] = useState('Uasin Gishu')
    const [town, setTown] = useState('Eldoret CBD')

    const [fNameError, setFNameError] = useState(true)
    const [lNameError, setLNameError] = useState(true)
    const [phoneError, setPhoneError] = useState(true)
    const [addressError, setAddressError] = useState(true)

 
    const fName = useRef('')
    const lName = useRef('')
    const phone = useRef('')
    const address = useRef('')



    const regions = {
        "Uasin Gishu": ["Kesses", "Eldoret CBD", "Maili Nne"],
        "West Pokot": ["Makutano", "Urtum"],
        "Turkana": ["Lodwar", "Lokichor", "Kakuma"]
    }

    const handleRegionChange = (e) => {
        setRegion(e.target.value)

    }

    const handleTownChange = (e) => {
        setTown(e.target.value)

    }

    const fNameErrorCheck = () => {
        if (fName.current.value.length < 2) {
            setFNameError(true)
        }
        else {
            setFNameError(false)
        }
    }

    const lNameErrorCheck = () => {
        if (lName.current.value.length < 2) {
            setLNameError(true)
        }
        else {
            setLNameError(false)
        }
    }

    const phoneErrorCheck = () => {
        if (phone.current.value.length !== 9) {
            setPhoneError(true)
        }
        else {
            setPhoneError(false)
        }
    }

    const addressErrorCheck = () => {
        if (address.current.value.length < 5) {
            setAddressError(true)
        }
        else {
            setAddressError(false)
        }
    }


    const errorCheck = () => {
        fNameErrorCheck()
        lNameErrorCheck()
        phoneErrorCheck()
        addressErrorCheck()
    }

    const nextHandler = (e) => {
        e.preventDefault()
        errorCheck()
        if (!fNameError && !lNameError && !phoneError && !addressError) {
            const addressData = {
                fName:fName.current.value,
                lName:lName.current.value,
                phone:phone.current.value,
                address:address.current.value,
                region:region,
                town:town
            }
            props.getAddress(addressData)
            console.log(addressData)
            props.proceed()
        }
    }
    return (
        <form onSubmit={nextHandler}>
            <Typography align="center" variant="h6">Shipping Address</Typography>
            <div className={classes.row}>
                <TextField id="standard-basic" label="First Name" inputRef={fName} InputLabelProps={{ className: classes.label }} error={fNameError} onChange={fNameErrorCheck} required />
                <TextField id="standard-basic" label="Last Name" inputRef={lName} InputLabelProps={{ className: classes.label }} error={lNameError} onChange={lNameErrorCheck} required />
            </div>
            <div className={classes.solo}>
                <TextField
                    label="Phone"
                    id="standard-start-adornment"
                    type="number"
                    className={classes.numberInput}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+254</InputAdornment>,
                        maxLength: '9'
                    }}
                    error={phoneError}
                    inputRef={phone}
                    onChange={phoneErrorCheck}
                    required
                />
            </div>
            <div>
                <TextField
                    label="Delivery Address"
                    variant="outlined"
                    style={{
                        width: '80%',
                        marginLeft: '10%',
                        marginBottom: '50px'
                    }}
                    inputProps={{
                        className: classes.textArea
                    }}
                    error={addressError}
                    inputRef={address}
                    onChange={addressErrorCheck}
                    required
                />
            </div>
            <div className={classes.row}>
                <FormControl className={classes.formControl} required>
                    <InputLabel id="simple-select-label-1" className={classes.label}>Region</InputLabel>
                    <Select
                        labelId="simple-select-label-1"
                        id="simple-select-1"
                        value={region}
                        onChange={handleRegionChange}
                    >
                        {
                            Object.keys(regions).map((region, index) => <MenuItem value={region} key={index}>
                                {region}
                            </MenuItem>)
                        }
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl} required>
                    <InputLabel id="simple-select-label-2" className={classes.label} style={{ marginLeft: '-40px' }}>City/Town/Center</InputLabel>
                    <Select
                        labelId="simple-select-label-2"
                        id="simple-select-2"
                        value={town}
                        onChange={handleTownChange}
                        style={{ marginLeft: '-40px' }}
                    >
                        {
                            region && regions[region].map((town, index) => <MenuItem value={town} key={index}>
                                {town}
                            </MenuItem>)
                        }
                    </Select>
                </FormControl>
            </div>
            <div align="center">
                <Button variant="outlined" type="submit" color="primary" >Next</Button>
            </div>
        </form>
    )
}

export default AddressForm
