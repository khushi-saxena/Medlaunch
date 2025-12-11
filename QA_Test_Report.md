# QA Test Report

**Project:** FE MultiStep Form Challenge
**Date:** 2025-12-10
**Status:** Passed

## Test Scenarios

| ID | Scenario | Expected Result | Actual Result | Status |
|----|----------|-----------------|---------------|--------|
| **TS01** | **Initial Load** | Form loads at Step 1. Focus on first input. | Form loaded correctly. | ✅ PASS |
| **TS02** | **Validation - Empty Submit** | Clicking "Next" without data shows error messages. | Errors displayed for all required fields. | ✅ PASS |
| **TS03** | **Validation - Invalid Email** | Entering bad email format shows error. | Regex validation triggered correctly. | ✅ PASS |
| **TS04** | **Password Match** | Mismatched passwords prevent progress. | "Passwords do not match" error shown. | ✅ PASS |
| **TS05** | **Navigation - Next** | Valid data allows moving to Step 2. Progress bar updates. | Transitioned to Step 2 smoothy. | ✅ PASS |
| **TS06** | **Navigation - Back** | Clicking "Back" returns to Step 1 with data preserved. | Data remained populated. | ✅ PASS |
| **TS07** | **Review Step** | Step 4 shows all entered data correctly. "Edit" links work. | Summary matches input. Edit jumped to correct step. | ✅ PASS |
| **TS08** | **Final Submit** | Clicking "Submit" logs JSON to console and shows Success. | Console logged payload. Success screen shown. | ✅ PASS |
| **TS09** | **Responsiveness** | Layout adapts to mobile screens (vertical stack). | Card resized appropriately on small screens. | ✅ PASS |

## Identified Issues & Resolutions

*   **Issue:** Initial setup had no validation for "Confirm Password".
    *   **Resolution:** Added `validate` rule in `register` referencing the `password` field via `watch()`.
*   **Issue:** Navigation allowed skipping steps if I manually changed state.
    *   **Resolution:** Implemented `trigger()` in `nextStep` function to force validation of current fields before state update.

## Tools Used
*   Vite (Build & Dev Server)
*   React Developer Tools
*   Chrome DevTools (Console & Mobile Emulation)
