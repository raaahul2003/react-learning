import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = ['Basic Information', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certification', 'Review & Submit'];

function Steps() {
    const skillSuggestionArray = ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT', 'ANGULAR', 'NODE JS', 'EXPRESS', 'MONGODB', 'NEXT JS', 'GIT']
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = React.useCallback((step) => {
        return step === 1;
    }, []);

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const previousActiveStepRef = React.useRef(activeStep);
    const resetButtonRef = React.useRef(null);
    const nextButtonRef = React.useRef(null);

    // render the content corresponding to array index

    const renderStepArrayContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div className='mt-3'>
                    <h3>Personal Details</h3>
                    <div className='mt-3'>
                        <div>
                            <TextField id="standard-name" label="Full Name" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-job" label="Job Title" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-loc" label="Location" variant="standard" className='w-100' />
                        </div>
                    </div>
                </div>
            )

            case 1: return (
                <div className='mt-3'>
                    <h3>Contact Details</h3>
                    <div className='mt-3'>
                        <div>
                            <TextField id="standard-email" label="Email" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-phone" label="Phone" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-github" label="Github Link" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-linkedin" label="Linkedin Link" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-portfolio" label="Portfolio Link" variant="standard" className='w-100' />
                        </div>
                    </div>
                </div>
            )

            case 2: return (
                <div className='mt-3'>
                    <h3>Education Details</h3>
                    <div className='mt-3'>
                        <div>
                            <TextField id="standard-course" label="Course" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-clg" label="College" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-uni" label="University" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-year" label="Passout Year" variant="standard" className='w-100' />
                        </div>
                    </div>
                </div>
            )

            case 3: return (
                <div className='mt-3'>
                    <h3>Professional Details</h3>
                    <div className='mt-3'>
                        <div>
                            <TextField id="standard-role" label="Job or Internship" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-company" label="Comapny Name" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-com-loc" label="Company Location" variant="standard" className='w-100' />
                        </div>
                        <div>
                            <TextField id="standard-duration" label="Duration" variant="standard" className='w-100' />
                        </div>
                    </div>
                </div>
            )
            case 4: return (
                <div className='mt-3'>
                    <h3>Skills</h3>
                    <div className='mt-3 d-flex align-items-center'>
                        <TextField sx={{ width: '500px' }} id="outlined-skils" label="Add Skills" variant="outlined" />
                        <Button variant="contained" className='ms-3'>Add</Button>
                    </div>
                    <h5>Suggestions:</h5>
                    <div className='d-flex my-3 flex-wrap'>
                        {
                            skillSuggestionArray.map(userSkills => (
                                <button className='btn btn-dark m-1'>{userSkills}</button>
                            ))
                        }
                    </div>
                    <h5>Added Skills:</h5>
                    <div className='d-flex my-3 flex-wrap'>
                        <span className='btn btn-dark m-1  d-flex align-items-center'>Skill <button className='btn text-light'>x</button></span>
                    </div>
                </div>
            )


            case 5: return (
                <div className='mt-3'>
                    <h3>Professional Summary</h3>
                    <div className='mt-3'>
                        <div>
                            <TextField id="standard-summary" label="Write a short summary of yourself" variant="standard" className='w-100' multiline rows={4} defaultValue={'Versatile and results-driven Full Stack Web Developer with 5+ years of experience designing, developing, and deploying scalable web applications. Proficient in both front-end and back-end technologies, including React, Angular, Node.j5, Express, and MongoDB. Adept at creating responsive user interfaces, RESTful APIs, and integrating third-party services. Strong understanding of software development life cycle, agile methodologies, and version control (Git).Passionate about building high-performance, user-centric solutions that solve real-world problems.'} />
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset} ref={resetButtonRef}>
                            Reset
                        </Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    {/* view of each step */}
                    <Box>
                        {renderStepArrayContent(activeStep)}
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext} ref={nextButtonRef}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default Steps
