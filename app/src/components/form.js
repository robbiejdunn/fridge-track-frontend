<FormControl variant="filled" className={classes.formControl} fullWidth>
                    <InputLabel id="date-label" shrink>Transaction date</InputLabel>
                    <FilledInput
                        type="datetime-local"
                        id="date-input"
                        value={date}
                        onChange={(e) => {setDate(e.target.value)}}
                        labelId="date-label"
                    ></FilledInput>
                </FormControl>
                <FormControl variant="filled" className={classes.formControl} fullWidth>
                    <InputLabel id="buy-sell-label">Type</InputLabel>
                    <Select
                        labelId="buy-sell-label"
                        id="buy-sell-select"
                        value={buySell}
                        onChange={(e) => {setBuySell(e.target.value)}}
                    >
                        <MenuItem value={'BUY'}>BUY</MenuItem>
                        <MenuItem value={'SELL'}>SELL</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="filled" className={classes.formControl} fullWidth>
                    <TextField
                        label="Units"
                        id="units-textfield"
                        variant="filled"
                        type="number"
                        value={units}
                        onChange={(e) => {setUnits(e.target.value)}}
                    />
                </FormControl>
                <FormControl variant="filled" className={classes.formControl} fullWidth>
                    <TextField
                        label="Price"
                        id="price-textfield"
                        variant="filled"
                        type="number"
                        value={price}
                        onChange={(e) => {setPrice(e.target.value)}}
                    />
                </FormControl>