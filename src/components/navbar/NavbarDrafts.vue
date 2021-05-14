<template>
    <div>
        <div class="card">
            <div class="card-header py-3">
                <span class="text-dark font-weight-bold">My Drafts</span>
            </div>

            <div class="card-body">
                <!-- Course -->
                <a class="media" href="#">
                    <div class="mt-1 mr-3">
                        <div class="avatar">
                            <img
                                class="avatar-img rounded-sm"
                                src="~@/assets/svg/components/graphics-8.svg"
                                alt="Image Description"
                            />
                        </div>
                    </div>
                    <div class="media-body">
                        <div class="mb-2">
                            <span class="d-block text-dark text-hover-primary font-size-1 font-weight-bold mb-1"
                                >Cryptocurrency Scams</span
                            >
                            <small class="d-block text-body">New</small>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span class="d-block text-body small text-cap">Completed</span>
                            <small class="text-dark font-weight-bold">25%</small>
                        </div>
                        <div class="progress" style="height: 6px">
                            <div
                                class="progress-bar"
                                role="progressbar"
                                style="width: 25%"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </a>
                <!-- End Course -->

                <!-- Course -->
                <a class="media mt-5" href="#">
                    <div class="mt-1 mr-3">
                        <div class="avatar">
                            <img
                                class="avatar-img rounded-sm"
                                src="~@/assets/svg/components/graphics-7.svg"
                                alt="Image Description"
                            />
                        </div>
                    </div>
                    <div class="media-body">
                        <div class="mb-2">
                            <span class="d-block text-dark text-hover-primary font-size-1 font-weight-bold mb-1"
                                >Fake News: Serbia and Western Balkans
                            </span>
                            <small class="d-block text-body">Disinformation and Fake News</small>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span class="d-block text-body small text-cap">Completed</span>
                            <small class="text-dark font-weight-bold">100%</small>
                        </div>
                        <div class="progress" style="height: 6px">
                            <div
                                class="progress-bar bg-success"
                                role="progressbar"
                                style="width: 100%"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </a>
                <!-- End Course -->
            </div>

            <div class="card-footer text-center py-3">
                <a class="font-size-1" href="#">
                    See all
                    <i class="fa fa-angle-right ml-1"></i>
                </a>
            </div>
        </div>
    </div>
</template>
